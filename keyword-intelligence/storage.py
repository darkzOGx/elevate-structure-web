"""
Keyword Intelligence Storage - 2025 SEO/GEO/AEO Optimization
Manages persistent storage and retrieval of keyword intelligence data
"""

import json
from pathlib import Path
from typing import List, Optional, Dict
from datetime import datetime

from fetcher import KeywordIntelligence


class KeywordStorage:
    """Manages keyword intelligence data persistence"""

    def __init__(self, data_dir: Optional[Path] = None):
        """
        Initialize storage manager

        Args:
            data_dir: Directory for storing intelligence files (defaults to ./data)
        """
        if data_dir is None:
            data_dir = Path(__file__).parent / "data"

        self.data_dir = Path(data_dir)
        self.data_dir.mkdir(parents=True, exist_ok=True)

    def save(self, intelligence: KeywordIntelligence) -> Path:
        """
        Save keyword intelligence to JSON file

        Args:
            intelligence: KeywordIntelligence object

        Returns:
            Path to saved file
        """
        safe_keyword = intelligence.primary_keyword.replace(" ", "-").replace("/", "-")
        filename = f"{intelligence.topic}-{safe_keyword}.json"
        filepath = self.data_dir / filename

        with open(filepath, 'w', encoding='utf-8') as f:
            json.dump(intelligence.to_dict(), f, indent=2, ensure_ascii=False)

        return filepath

    def load(self, topic: str, primary_keyword: str) -> Optional[KeywordIntelligence]:
        """
        Load keyword intelligence from file

        Args:
            topic: Topic category
            primary_keyword: Primary keyword

        Returns:
            KeywordIntelligence object or None if not found
        """
        safe_keyword = primary_keyword.replace(" ", "-").replace("/", "-")
        filename = f"{topic}-{safe_keyword}.json"
        filepath = self.data_dir / filename

        if not filepath.exists():
            return None

        try:
            with open(filepath, 'r', encoding='utf-8') as f:
                data = json.load(f)
                return KeywordIntelligence.from_dict(data)
        except Exception as e:
            print(f"⚠️  Error loading {filepath}: {e}")
            return None

    def load_all_by_topic(self, topic: str) -> List[KeywordIntelligence]:
        """
        Load all keyword intelligence files for a topic

        Args:
            topic: Topic category

        Returns:
            List of KeywordIntelligence objects
        """
        intelligence_list = []

        for filepath in self.data_dir.glob(f"{topic}-*.json"):
            try:
                with open(filepath, 'r', encoding='utf-8') as f:
                    data = json.load(f)
                    intelligence_list.append(KeywordIntelligence.from_dict(data))
            except Exception as e:
                print(f"⚠️  Error loading {filepath}: {e}")

        return intelligence_list

    def load_all(self) -> List[KeywordIntelligence]:
        """
        Load all keyword intelligence files

        Returns:
            List of all KeywordIntelligence objects
        """
        intelligence_list = []

        for filepath in self.data_dir.glob("*.json"):
            # Skip metadata files
            if filepath.name in ["active_topics.json", "last_run.json"]:
                continue

            try:
                with open(filepath, 'r', encoding='utf-8') as f:
                    data = json.load(f)
                    intelligence_list.append(KeywordIntelligence.from_dict(data))
            except Exception as e:
                print(f"⚠️  Error loading {filepath}: {e}")

        return intelligence_list

    def get_stale(self, days_threshold: int = 14) -> List[KeywordIntelligence]:
        """
        Get keyword intelligence files that are stale (older than threshold)

        Args:
            days_threshold: Number of days before considered stale

        Returns:
            List of stale KeywordIntelligence objects
        """
        stale = []
        all_intelligence = self.load_all()

        for intel in all_intelligence:
            last_updated = datetime.fromisoformat(intel.last_updated)
            age_days = (datetime.now() - last_updated).days

            if age_days >= days_threshold:
                stale.append(intel)

        return stale

    def get_by_serp_feature(self, feature: str) -> List[KeywordIntelligence]:
        """
        Get keywords that have a specific SERP feature

        Args:
            feature: SERP feature to filter by (e.g., "featured_snippet", "local_pack")

        Returns:
            List of matching KeywordIntelligence objects
        """
        matching = []

        for intel in self.load_all():
            if feature in intel.serp_features_present:
                matching.append(intel)

        return matching

    def get_by_intent(self, intent: str) -> List[KeywordIntelligence]:
        """
        Get keywords that have query fan-out for a specific intent

        Args:
            intent: Intent type (e.g., "cost", "definitional", "comparison")

        Returns:
            List of matching KeywordIntelligence objects
        """
        matching = []

        for intel in self.load_all():
            for fan_out in intel.query_fan_out_intents:
                if fan_out["intent"] == intent and fan_out["keywords"]:
                    matching.append(intel)
                    break

        return matching

    def export_for_blog_generation(self, topic: Optional[str] = None) -> Dict:
        """
        Export keyword intelligence in format optimized for blog generation

        Args:
            topic: Optional topic filter

        Returns:
            Dict with blog-ready keyword data
        """
        if topic:
            intelligence_list = self.load_all_by_topic(topic)
        else:
            intelligence_list = self.load_all()

        export_data = {
            "generated_at": datetime.now().isoformat(),
            "total_keywords": len(intelligence_list),
            "keywords": []
        }

        for intel in intelligence_list:
            keyword_data = {
                "primary_keyword": intel.primary_keyword,
                "topic": intel.topic,
                "last_updated": intel.last_updated,

                # Long-tail variations for content
                "longtail_keywords": intel.long_tail_keywords[:10],

                # PAA questions for FAQ sections
                "paa_questions": [qa["question"] for qa in intel.people_also_ask[:8]],

                # PASF for related keywords
                "related_keywords": intel.people_also_search_for[:10],

                # Query intents for content structure
                "intents": {
                    fan_out["intent"]: fan_out["keywords"][:3]
                    for fan_out in intel.query_fan_out_intents
                },

                # SERP features for optimization targets
                "serp_features": intel.serp_features_present,

                # Content recommendations
                "recommendations": self._generate_recommendations(intel)
            }

            export_data["keywords"].append(keyword_data)

        return export_data

    def _generate_recommendations(self, intel: KeywordIntelligence) -> Dict[str, str]:
        """Generate content recommendations based on intelligence"""
        recommendations = {}

        # Featured snippet opportunity
        if "featured_snippet" in intel.serp_features_present:
            recommendations["featured_snippet"] = "Target featured snippet with 40-60 word direct answer in first paragraph"

        # Local Pack opportunity
        if "local_pack" in intel.serp_features_present:
            recommendations["local_seo"] = "Optimize for Local Pack with city-specific content and LocalBusiness schema"

        # PAA optimization
        if intel.people_also_ask:
            recommendations["paa"] = f"Include FAQ section with {len(intel.people_also_ask)} PAA questions and FAQ schema"

        # Intent-based structure
        if intel.query_fan_out_intents:
            intents = [f["intent"] for f in intel.query_fan_out_intents]
            recommendations["structure"] = f"Structure content with sections for: {', '.join(intents)}"

        # Long-tail targeting
        if len(intel.long_tail_keywords) >= 10:
            recommendations["longtail"] = f"Target {len(intel.long_tail_keywords)} long-tail variations in H2/H3 headers"

        return recommendations

    def get_summary_stats(self) -> Dict:
        """
        Get summary statistics for all keyword intelligence

        Returns:
            Dict with summary statistics
        """
        all_intel = self.load_all()

        if not all_intel:
            return {"error": "No keyword intelligence data found"}

        # Collect stats
        total_keywords = len(all_intel)
        total_paa = sum(len(i.people_also_ask) for i in all_intel)
        total_pasf = sum(len(i.people_also_search_for) for i in all_intel)
        total_longtail = sum(len(i.long_tail_keywords) for i in all_intel)

        # SERP features distribution
        serp_features = {}
        for intel in all_intel:
            for feature in intel.serp_features_present:
                serp_features[feature] = serp_features.get(feature, 0) + 1

        # Intent distribution
        intents = {}
        for intel in all_intel:
            for fan_out in intel.query_fan_out_intents:
                intent = fan_out["intent"]
                intents[intent] = intents.get(intent, 0) + 1

        # Topics
        topics = {}
        for intel in all_intel:
            topics[intel.topic] = topics.get(intel.topic, 0) + 1

        return {
            "total_keywords": total_keywords,
            "total_paa_questions": total_paa,
            "total_pasf_keywords": total_pasf,
            "total_longtail_variations": total_longtail,
            "avg_paa_per_keyword": round(total_paa / total_keywords, 1) if total_keywords > 0 else 0,
            "avg_pasf_per_keyword": round(total_pasf / total_keywords, 1) if total_keywords > 0 else 0,
            "avg_longtail_per_keyword": round(total_longtail / total_keywords, 1) if total_keywords > 0 else 0,
            "serp_features": serp_features,
            "intents": intents,
            "topics": topics
        }


# CLI interface
if __name__ == "__main__":
    import argparse

    parser = argparse.ArgumentParser(description="Keyword Intelligence Storage")
    parser.add_argument("--list", action="store_true", help="List all stored intelligence")
    parser.add_argument("--topic", help="Filter by topic")
    parser.add_argument("--stats", action="store_true", help="Show summary statistics")
    parser.add_argument("--export", help="Export for blog generation (JSON output file)")
    parser.add_argument("--stale", type=int, help="Show stale intelligence (older than N days)")

    args = parser.parse_args()

    storage = KeywordStorage()

    if args.stats:
        stats = storage.get_summary_stats()
        print(json.dumps(stats, indent=2))

    elif args.export:
        data = storage.export_for_blog_generation(topic=args.topic)
        output_path = Path(args.export)
        with open(output_path, 'w', encoding='utf-8') as f:
            json.dump(data, f, indent=2, ensure_ascii=False)
        print(f"✓ Exported to {output_path}")

    elif args.stale:
        stale = storage.get_stale(days_threshold=args.stale)
        print(f"Stale intelligence (older than {args.stale} days): {len(stale)}")
        for intel in stale:
            print(f"  - {intel.topic}: {intel.primary_keyword} (updated {intel.last_updated})")

    elif args.list:
        if args.topic:
            intelligence_list = storage.load_all_by_topic(args.topic)
        else:
            intelligence_list = storage.load_all()

        print(f"Keyword Intelligence: {len(intelligence_list)} items")
        for intel in intelligence_list:
            print(f"\n  {intel.primary_keyword} ({intel.topic})")
            print(f"    Updated: {intel.last_updated}")
            print(f"    PAA: {len(intel.people_also_ask)}, PASF: {len(intel.people_also_search_for)}, Long-tail: {len(intel.long_tail_keywords)}")
            print(f"    SERP features: {', '.join(intel.serp_features_present) if intel.serp_features_present else 'none'}")

    else:
        print("Use --help to see available commands")
