"""
Keyword Intelligence Fetcher - 2025 SEO/GEO/AEO Optimization
Integrates with SerpAPI to fetch PAA, PASF, long-tail keywords for blog generation
"""

import os
import json
import time
from dataclasses import dataclass, asdict
from datetime import datetime, timedelta
from typing import List, Dict, Optional, Set
import requests
from pathlib import Path

@dataclass
class KeywordIntelligence:
    """Complete keyword intelligence snapshot for a topic"""
    topic: str
    primary_keyword: str
    last_updated: str
    long_tail_keywords: List[str]
    people_also_ask: List[Dict[str, str]]  # [{"question": "...", "answer": "..."}]
    people_also_search_for: List[str]
    query_fan_out_intents: List[Dict[str, str]]  # [{"intent": "...", "keywords": [...]}]
    serp_features_present: List[str]  # ["featured_snippet", "local_pack", "paa", ...]
    search_volume: Optional[int] = None
    competition: Optional[str] = None  # "low", "medium", "high"
    trend_direction: Optional[str] = None  # "rising", "stable", "declining"

    def to_dict(self) -> dict:
        """Convert to dict for JSON serialization"""
        return asdict(self)

    @classmethod
    def from_dict(cls, data: dict):
        """Create instance from dict"""
        return cls(**data)


class KeywordFetcher:
    """Fetches comprehensive keyword intelligence using SerpAPI"""

    CACHE_DIR = Path(__file__).parent / "data" / "cache"
    CACHE_DURATION_DAYS = 7

    def __init__(self, serpapi_key: Optional[str] = None):
        """
        Initialize KeywordFetcher

        Args:
            serpapi_key: SerpAPI key (or uses SERPAPI_KEY env var)
        """
        self.serpapi_key = serpapi_key or os.getenv("SERPAPI_KEY")
        self.cache_enabled = True
        self.CACHE_DIR.mkdir(parents=True, exist_ok=True)

        if not self.serpapi_key:
            print("⚠️  WARNING: No SerpAPI key found. Using fallback mode (limited data).")
            print("   Set SERPAPI_KEY environment variable for full functionality.")

    def fetch_serp_data(self, keyword: str, location: str = "United States") -> dict:
        """
        Fetch raw SERP data from SerpAPI

        Args:
            keyword: Search query
            location: Geographic location for search

        Returns:
            dict: Raw SERP API response
        """
        if not self.serpapi_key:
            return self._fallback_serp_data(keyword)

        # Check cache first
        cache_file = self._get_cache_path(keyword, location)
        cached_data = self._load_from_cache(cache_file)
        if cached_data:
            print(f"✓ Using cached SERP data for '{keyword}'")
            return cached_data

        # Fetch fresh data
        params = {
            "api_key": self.serpapi_key,
            "q": keyword,
            "location": location,
            "hl": "en",
            "gl": "us",
            "google_domain": "google.com",
        }

        try:
            print(f"🔍 Fetching SERP data for '{keyword}'...")
            response = requests.get("https://serpapi.com/search", params=params, timeout=30)
            response.raise_for_status()
            data = response.json()

            # Cache the result
            self._save_to_cache(cache_file, data)
            print(f"✓ SERP data fetched and cached for '{keyword}'")

            return data
        except Exception as e:
            print(f"❌ Error fetching SERP data: {e}")
            return self._fallback_serp_data(keyword)

    def fetch_people_also_ask(self, keyword: str) -> List[Dict[str, str]]:
        """
        Extract People Also Ask questions and answers

        Returns:
            List of {"question": "...", "answer": "..."} dicts
        """
        serp_data = self.fetch_serp_data(keyword)

        paa_list = []

        # Extract from SerpAPI response
        if "related_questions" in serp_data:
            for qa in serp_data["related_questions"]:
                paa_list.append({
                    "question": qa.get("question", ""),
                    "answer": qa.get("snippet", "")[:200]  # Truncate long answers
                })

        return paa_list

    def fetch_people_also_search_for(self, keyword: str) -> List[str]:
        """
        Extract People Also Search For (PASF) keywords

        Returns:
            List of related search terms
        """
        serp_data = self.fetch_serp_data(keyword)

        pasf_list = []

        # Extract from SerpAPI response
        if "related_searches" in serp_data:
            for item in serp_data["related_searches"]:
                if isinstance(item, dict) and "query" in item:
                    pasf_list.append(item["query"])
                elif isinstance(item, str):
                    pasf_list.append(item)

        return pasf_list

    def fetch_longtail_keywords(self, keyword: str) -> List[str]:
        """
        Generate long-tail keyword variations

        Combines:
        - Google autocomplete suggestions
        - PASF terms
        - Common modifiers

        Returns:
            List of long-tail keyword variations
        """
        longtail = []

        # Get PASF as base for long-tail
        pasf = self.fetch_people_also_search_for(keyword)
        longtail.extend(pasf)

        # Add common modifiers (structural engineering niche)
        modifiers = [
            "near me",
            "cost",
            "services",
            "requirements",
            "guide",
            "how to",
            "best",
            "top",
            "residential",
            "commercial",
            "california",
        ]

        for modifier in modifiers:
            longtail.append(f"{keyword} {modifier}")
            longtail.append(f"{modifier} {keyword}")

        # Remove duplicates while preserving order
        seen = set()
        unique_longtail = []
        for kw in longtail:
            kw_lower = kw.lower()
            if kw_lower not in seen:
                seen.add(kw_lower)
                unique_longtail.append(kw)

        return unique_longtail[:20]  # Limit to top 20

    def analyze_query_fan_out(self, keyword: str, paa: List[Dict[str, str]]) -> List[Dict[str, str]]:
        """
        Analyze Query Fan-Out - group related questions by intent

        Args:
            keyword: Primary keyword
            paa: People Also Ask data

        Returns:
            List of intent clusters with keywords
        """
        intents = {
            "definitional": [],
            "cost": [],
            "comparison": [],
            "process": [],
            "requirements": [],
            "local": [],
        }

        for qa in paa:
            question = qa["question"].lower()

            if any(word in question for word in ["what is", "what are", "define"]):
                intents["definitional"].append(qa["question"])
            elif any(word in question for word in ["cost", "price", "expensive", "fee"]):
                intents["cost"].append(qa["question"])
            elif any(word in question for word in ["vs", "versus", "compare", "difference", "better"]):
                intents["comparison"].append(qa["question"])
            elif any(word in question for word in ["how", "steps", "process", "procedure"]):
                intents["process"].append(qa["question"])
            elif any(word in question for word in ["need", "require", "must", "should"]):
                intents["requirements"].append(qa["question"])
            elif any(word in question for word in ["near me", "in", "city", "local"]):
                intents["local"].append(qa["question"])

        # Convert to output format
        fan_out = []
        for intent_type, questions in intents.items():
            if questions:
                fan_out.append({
                    "intent": intent_type,
                    "keywords": questions
                })

        return fan_out

    def detect_serp_features(self, keyword: str) -> List[str]:
        """
        Detect which SERP features are present for this keyword

        Returns:
            List of SERP features: featured_snippet, local_pack, paa, etc.
        """
        serp_data = self.fetch_serp_data(keyword)
        features = []

        # Check for various SERP features
        if "answer_box" in serp_data or "featured_snippet" in serp_data:
            features.append("featured_snippet")

        if "local_results" in serp_data or "local_pack" in serp_data:
            features.append("local_pack")

        if "related_questions" in serp_data:
            features.append("people_also_ask")

        if "related_searches" in serp_data:
            features.append("related_searches")

        if "knowledge_graph" in serp_data:
            features.append("knowledge_graph")

        if "shopping_results" in serp_data:
            features.append("shopping_results")

        if "top_stories" in serp_data or "news_results" in serp_data:
            features.append("news")

        return features

    def fetch_complete_intelligence(self, topic: str, primary_keyword: str) -> KeywordIntelligence:
        """
        Fetch complete keyword intelligence for a topic

        Args:
            topic: Topic category (e.g., "structural-engineering")
            primary_keyword: Main keyword to analyze

        Returns:
            KeywordIntelligence object with all data
        """
        print(f"\n📊 Fetching keyword intelligence for: {primary_keyword}")
        print("=" * 70)

        # Fetch all components
        paa = self.fetch_people_also_ask(primary_keyword)
        pasf = self.fetch_people_also_search_for(primary_keyword)
        longtail = self.fetch_longtail_keywords(primary_keyword)
        fan_out = self.analyze_query_fan_out(primary_keyword, paa)
        serp_features = self.detect_serp_features(primary_keyword)

        intelligence = KeywordIntelligence(
            topic=topic,
            primary_keyword=primary_keyword,
            last_updated=datetime.now().isoformat(),
            long_tail_keywords=longtail,
            people_also_ask=paa,
            people_also_search_for=pasf,
            query_fan_out_intents=fan_out,
            serp_features_present=serp_features
        )

        # Print summary
        print(f"\n✓ Intelligence gathered:")
        print(f"  - PAA questions: {len(paa)}")
        print(f"  - PASF keywords: {len(pasf)}")
        print(f"  - Long-tail variations: {len(longtail)}")
        print(f"  - Query intents: {len(fan_out)}")
        print(f"  - SERP features: {', '.join(serp_features) if serp_features else 'none'}")

        return intelligence

    def save_intelligence(self, intelligence: KeywordIntelligence, filename: Optional[str] = None):
        """
        Save keyword intelligence to JSON file

        Args:
            intelligence: KeywordIntelligence object
            filename: Optional custom filename (defaults to {topic}-{keyword}.json)
        """
        if not filename:
            safe_keyword = intelligence.primary_keyword.replace(" ", "-").replace("/", "-")
            filename = f"{intelligence.topic}-{safe_keyword}.json"

        filepath = Path(__file__).parent / "data" / filename
        filepath.parent.mkdir(parents=True, exist_ok=True)

        with open(filepath, 'w', encoding='utf-8') as f:
            json.dump(intelligence.to_dict(), f, indent=2, ensure_ascii=False)

        print(f"\n💾 Saved intelligence to: {filepath}")

    def _get_cache_path(self, keyword: str, location: str) -> Path:
        """Generate cache file path for keyword+location"""
        safe_key = f"{keyword}-{location}".replace(" ", "_").replace("/", "-")
        return self.CACHE_DIR / f"{safe_key}.json"

    def _load_from_cache(self, cache_file: Path) -> Optional[dict]:
        """Load data from cache if fresh (< 7 days old)"""
        if not cache_file.exists():
            return None

        # Check age
        file_age = datetime.now() - datetime.fromtimestamp(cache_file.stat().st_mtime)
        if file_age > timedelta(days=self.CACHE_DURATION_DAYS):
            return None

        try:
            with open(cache_file, 'r', encoding='utf-8') as f:
                return json.load(f)
        except Exception:
            return None

    def _save_to_cache(self, cache_file: Path, data: dict):
        """Save data to cache file"""
        try:
            with open(cache_file, 'w', encoding='utf-8') as f:
                json.dump(data, f, indent=2)
        except Exception as e:
            print(f"⚠️  Failed to cache data: {e}")

    def _fallback_serp_data(self, keyword: str) -> dict:
        """
        Fallback SERP data when API key not available
        Returns minimal structure for testing
        """
        return {
            "related_questions": [
                {"question": f"What is {keyword}?", "snippet": "Fallback answer - API key required for real data"},
                {"question": f"How much does {keyword} cost?", "snippet": "Pricing varies - API key required"},
                {"question": f"Do I need {keyword}?", "snippet": "Depends on project - API key required"},
            ],
            "related_searches": [
                f"{keyword} cost",
                f"{keyword} near me",
                f"{keyword} requirements",
                f"how to {keyword}",
            ]
        }


# CLI interface
if __name__ == "__main__":
    import argparse

    parser = argparse.ArgumentParser(description="Fetch keyword intelligence")
    parser.add_argument("keyword", help="Primary keyword to analyze")
    parser.add_argument("--topic", default="general", help="Topic category")
    parser.add_argument("--save", action="store_true", help="Save to JSON file")

    args = parser.parse_args()

    fetcher = KeywordFetcher()
    intelligence = fetcher.fetch_complete_intelligence(args.topic, args.keyword)

    if args.save:
        fetcher.save_intelligence(intelligence)
    else:
        print("\n" + "=" * 70)
        print("KEYWORD INTELLIGENCE SUMMARY")
        print("=" * 70)
        print(json.dumps(intelligence.to_dict(), indent=2))
