"""
Query Fan-Out Analyzer - 2025 SEO/GEO/AEO Optimization
Analyzes search intent patterns and keyword relationships
"""

import json
from pathlib import Path
from typing import List, Dict, Set, Optional
from collections import defaultdict

from fetcher import KeywordIntelligence
from storage import KeywordStorage


class QueryFanOutAnalyzer:
    """Analyzes query fan-out patterns for content strategy"""

    def __init__(self, storage: Optional[KeywordStorage] = None):
        """
        Initialize analyzer

        Args:
            storage: KeywordStorage instance (creates new if not provided)
        """
        self.storage = storage or KeywordStorage()

    def analyze_intent_coverage(self, topic: str) -> Dict[str, any]:
        """
        Analyze intent coverage for a topic

        Args:
            topic: Topic category to analyze

        Returns:
            Dict with intent coverage analysis
        """
        intelligence_list = self.storage.load_all_by_topic(topic)

        if not intelligence_list:
            return {"error": f"No intelligence data found for topic: {topic}"}

        # Collect all intents
        intent_keywords = defaultdict(list)
        intent_frequency = defaultdict(int)

        for intel in intelligence_list:
            for fan_out in intel.query_fan_out_intents:
                intent = fan_out["intent"]
                keywords = fan_out["keywords"]

                intent_frequency[intent] += 1
                intent_keywords[intent].extend([
                    (kw, intel.primary_keyword) for kw in keywords
                ])

        # Calculate coverage
        total_keywords = len(intelligence_list)
        coverage = {}

        for intent, count in intent_frequency.items():
            coverage[intent] = {
                "frequency": count,
                "coverage_pct": round((count / total_keywords) * 100, 1),
                "example_questions": list(set([kw for kw, _ in intent_keywords[intent][:10]]))
            }

        return {
            "topic": topic,
            "total_keywords": total_keywords,
            "intents_found": len(coverage),
            "intent_coverage": coverage,
            "recommendations": self._generate_intent_recommendations(coverage)
        }

    def find_content_gaps(self, topic: str) -> Dict[str, any]:
        """
        Identify content gaps based on PAA questions not yet addressed

        Args:
            topic: Topic category

        Returns:
            Dict with content gap analysis
        """
        intelligence_list = self.storage.load_all_by_topic(topic)

        if not intelligence_list:
            return {"error": f"No intelligence data found for topic: {topic}"}

        # Collect all PAA questions
        all_questions = []
        for intel in intelligence_list:
            for qa in intel.people_also_ask:
                all_questions.append({
                    "question": qa["question"],
                    "answer_snippet": qa["answer"][:100],
                    "source_keyword": intel.primary_keyword
                })

        # Group similar questions
        question_clusters = self._cluster_similar_questions(all_questions)

        return {
            "topic": topic,
            "total_paa_questions": len(all_questions),
            "unique_question_clusters": len(question_clusters),
            "gap_opportunities": question_clusters[:15],  # Top 15 opportunities
            "recommendations": self._generate_gap_recommendations(question_clusters)
        }

    def identify_serp_feature_opportunities(self, topic: Optional[str] = None) -> Dict[str, any]:
        """
        Identify SERP feature optimization opportunities

        Args:
            topic: Optional topic filter

        Returns:
            Dict with SERP feature opportunities
        """
        if topic:
            intelligence_list = self.storage.load_all_by_topic(topic)
        else:
            intelligence_list = self.storage.load_all()

        # Group by SERP features
        feature_keywords = defaultdict(list)

        for intel in intelligence_list:
            for feature in intel.serp_features_present:
                feature_keywords[feature].append({
                    "keyword": intel.primary_keyword,
                    "topic": intel.topic,
                    "paa_count": len(intel.people_also_ask)
                })

        # Prioritize opportunities
        opportunities = {}

        for feature, keywords in feature_keywords.items():
            opportunities[feature] = {
                "keyword_count": len(keywords),
                "top_keywords": sorted(keywords, key=lambda x: x.get("paa_count", 0), reverse=True)[:10],
                "priority": self._calculate_feature_priority(feature, len(keywords))
            }

        return {
            "total_keywords": len(intelligence_list),
            "features_found": len(opportunities),
            "opportunities": dict(sorted(
                opportunities.items(),
                key=lambda x: x[1]["priority"],
                reverse=True
            )),
            "recommendations": self._generate_serp_recommendations(opportunities)
        }

    def generate_content_brief(self, primary_keyword: str, topic: str) -> Dict[str, any]:
        """
        Generate comprehensive content brief for a keyword

        Args:
            primary_keyword: Keyword to generate brief for
            topic: Topic category

        Returns:
            Dict with complete content brief
        """
        intel = self.storage.load(topic, primary_keyword)

        if not intel:
            return {"error": f"No intelligence found for: {topic}/{primary_keyword}"}

        # Build content brief
        brief = {
            "primary_keyword": primary_keyword,
            "topic": topic,
            "last_updated": intel.last_updated,

            # Title suggestions
            "title_suggestions": self._generate_title_suggestions(intel),

            # Header structure (H2s based on intents)
            "recommended_headers": self._generate_header_structure(intel),

            # FAQ section
            "faq_questions": [
                {"question": qa["question"], "answer_guide": qa["answer"]}
                for qa in intel.people_also_ask[:8]
            ],

            # Related keywords to include
            "related_keywords": {
                "primary_variations": intel.long_tail_keywords[:5],
                "pasf_keywords": intel.people_also_search_for[:8],
                "semantic_keywords": self._extract_semantic_keywords(intel)
            },

            # Schema markup requirements
            "schema_requirements": self._determine_schema_requirements(intel),

            # Content optimization targets
            "optimization_targets": {
                "word_count": self._recommend_word_count(intel),
                "serp_features": intel.serp_features_present,
                "intents_to_address": [f["intent"] for f in intel.query_fan_out_intents]
            },

            # Answer capsule (TL;DR)
            "answer_capsule_guide": self._generate_answer_capsule_guide(intel)
        }

        return brief

    # Helper methods

    def _cluster_similar_questions(self, questions: List[Dict]) -> List[Dict]:
        """Group similar questions together"""
        # Simple clustering based on shared keywords
        # In production, could use more sophisticated NLP
        clusters = []
        seen_questions = set()

        for q in questions:
            question_text = q["question"].lower()

            if question_text in seen_questions:
                continue

            # Find similar questions
            similar = [q]
            for other_q in questions:
                other_text = other_q["question"].lower()
                if other_text != question_text and other_text not in seen_questions:
                    # Simple similarity: share 3+ words
                    q_words = set(question_text.split())
                    other_words = set(other_text.split())
                    if len(q_words & other_words) >= 3:
                        similar.append(other_q)
                        seen_questions.add(other_text)

            seen_questions.add(question_text)

            if len(similar) >= 1:
                clusters.append({
                    "representative_question": similar[0]["question"],
                    "variations": [s["question"] for s in similar[1:4]],  # Top 3 variations
                    "frequency": len(similar),
                    "content_opportunity": "high" if len(similar) >= 3 else "medium"
                })

        return sorted(clusters, key=lambda x: x["frequency"], reverse=True)

    def _calculate_feature_priority(self, feature: str, keyword_count: int) -> int:
        """Calculate priority score for SERP feature"""
        priorities = {
            "featured_snippet": 100,
            "local_pack": 95,
            "people_also_ask": 90,
            "knowledge_graph": 85,
            "related_searches": 70,
            "shopping_results": 60,
            "news": 50
        }

        base_priority = priorities.get(feature, 40)
        # Boost priority if many keywords show this feature
        volume_boost = min(keyword_count * 2, 20)

        return base_priority + volume_boost

    def _generate_title_suggestions(self, intel: KeywordIntelligence) -> List[str]:
        """Generate title suggestions based on intelligence"""
        keyword = intel.primary_keyword
        suggestions = [
            f"{keyword.title()}: Complete 2025 Guide",
            f"What is {keyword.title()}? Expert Guide",
            f"How {keyword.title()} Works: Step-by-Step Guide",
            f"{keyword.title()} Cost, Requirements & Process"
        ]
        return suggestions

    def _generate_header_structure(self, intel: KeywordIntelligence) -> List[str]:
        """Generate recommended H2 header structure"""
        headers = [
            f"What is {intel.primary_keyword}?",  # Definitional
        ]

        # Add intent-based headers
        intent_headers = {
            "definitional": f"What is {intel.primary_keyword}?",
            "cost": f"How much does {intel.primary_keyword} cost?",
            "comparison": f"How does {intel.primary_keyword} compare to alternatives?",
            "process": f"How does {intel.primary_keyword} work?",
            "requirements": f"What are the {intel.primary_keyword} requirements?",
            "local": f"Where to find {intel.primary_keyword} near me?"
        }

        for fan_out in intel.query_fan_out_intents:
            intent = fan_out["intent"]
            if intent in intent_headers and fan_out["keywords"]:
                headers.append(intent_headers[intent])

        return headers

    def _extract_semantic_keywords(self, intel: KeywordIntelligence) -> List[str]:
        """Extract semantic keywords from PAA and PASF"""
        semantic = set()

        # From PAA questions
        for qa in intel.people_also_ask:
            words = qa["question"].lower().split()
            # Extract noun phrases (simple heuristic)
            for i in range(len(words) - 1):
                if len(words[i]) > 3 and len(words[i+1]) > 3:
                    semantic.add(f"{words[i]} {words[i+1]}")

        return list(semantic)[:10]

    def _determine_schema_requirements(self, intel: KeywordIntelligence) -> List[str]:
        """Determine required schema types based on intelligence"""
        schemas = ["Article", "Breadcrumb"]  # Always include

        if "featured_snippet" in intel.serp_features_present:
            schemas.append("HowTo or FAQ (for featured snippet)")

        if "local_pack" in intel.serp_features_present:
            schemas.append("LocalBusiness")

        if intel.people_also_ask:
            schemas.append("FAQPage")

        return schemas

    def _recommend_word_count(self, intel: KeywordIntelligence) -> str:
        """Recommend word count based on competition"""
        # More SERP features = more competitive = longer content needed
        feature_count = len(intel.serp_features_present)
        paa_count = len(intel.people_also_ask)

        if feature_count >= 4 or paa_count >= 8:
            return "2500-3500 words (high competition)"
        elif feature_count >= 2 or paa_count >= 4:
            return "1500-2500 words (medium competition)"
        else:
            return "1000-1500 words (low competition)"

    def _generate_answer_capsule_guide(self, intel: KeywordIntelligence) -> str:
        """Generate guide for Answer Capsule (TL;DR)"""
        return f"Create a 40-60 word direct answer for '{intel.primary_keyword}' that addresses: " \
               f"what it is, who needs it, and primary benefit. Place immediately after H1. " \
               f"Optimize for featured snippet extraction."

    def _generate_intent_recommendations(self, coverage: Dict) -> List[str]:
        """Generate recommendations based on intent coverage"""
        recs = []

        # Check for missing high-value intents
        important_intents = ["cost", "definitional", "requirements", "local"]
        for intent in important_intents:
            if intent not in coverage:
                recs.append(f"Create content targeting '{intent}' intent (currently missing)")

        # Check for underrepresented intents
        for intent, data in coverage.items():
            if data["coverage_pct"] < 20:
                recs.append(f"Increase '{intent}' content coverage (currently {data['coverage_pct']}%)")

        return recs[:5]  # Top 5 recommendations

    def _generate_gap_recommendations(self, clusters: List[Dict]) -> List[str]:
        """Generate recommendations based on content gaps"""
        recs = []

        # High-frequency question clusters
        high_freq = [c for c in clusters if c["frequency"] >= 3]
        if high_freq:
            recs.append(f"Create dedicated content for {len(high_freq)} high-frequency question clusters")

        # PAA optimization
        recs.append(f"Target top {min(len(clusters), 10)} PAA questions in FAQ sections with schema markup")

        return recs

    def _generate_serp_recommendations(self, opportunities: Dict) -> List[str]:
        """Generate recommendations based on SERP features"""
        recs = []

        for feature, data in list(opportunities.items())[:3]:  # Top 3 features
            priority = data["priority"]
            count = data["keyword_count"]

            if priority >= 90:
                recs.append(f"HIGH PRIORITY: Optimize for '{feature}' ({count} keywords showing this feature)")
            elif priority >= 70:
                recs.append(f"MEDIUM PRIORITY: Target '{feature}' ({count} opportunities)")

        return recs


# CLI interface
if __name__ == "__main__":
    import argparse

    parser = argparse.ArgumentParser(description="Query Fan-Out Analyzer")
    parser.add_argument("--intent-coverage", metavar="TOPIC", help="Analyze intent coverage for topic")
    parser.add_argument("--content-gaps", metavar="TOPIC", help="Find content gaps for topic")
    parser.add_argument("--serp-features", help="Analyze SERP feature opportunities (optional: --topic TOPIC)")
    parser.add_argument("--topic", help="Filter by topic")
    parser.add_argument("--brief", nargs=2, metavar=("KEYWORD", "TOPIC"), help="Generate content brief")

    args = parser.parse_args()

    analyzer = QueryFanOutAnalyzer()

    if args.intent_coverage:
        result = analyzer.analyze_intent_coverage(args.intent_coverage)
        print(json.dumps(result, indent=2))

    elif args.content_gaps:
        result = analyzer.find_content_gaps(args.content_gaps)
        print(json.dumps(result, indent=2))

    elif args.serp_features:
        result = analyzer.identify_serp_feature_opportunities(topic=args.topic)
        print(json.dumps(result, indent=2))

    elif args.brief:
        keyword, topic = args.brief
        result = analyzer.generate_content_brief(keyword, topic)
        print(json.dumps(result, indent=2))

    else:
        print("Use --help to see available commands")
