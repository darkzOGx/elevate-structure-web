"""
Keyword Intelligence Scheduler - 2025 SEO/GEO/AEO Optimization
Automated weekly keyword refresh with manual trigger support
"""

import os
import json
import time
from pathlib import Path
from datetime import datetime, timedelta
from typing import List, Dict, Optional
import schedule
import yaml

from fetcher import KeywordFetcher, KeywordIntelligence


class KeywordScheduler:
    """Manages automated keyword intelligence updates"""

    def __init__(self, config_path: Optional[str] = None):
        """
        Initialize scheduler

        Args:
            config_path: Path to config.yaml (defaults to ../config.yaml)
        """
        if config_path is None:
            config_path = Path(__file__).parent.parent / "config.yaml"

        self.config_path = Path(config_path)
        self.config = self._load_config()

        # Paths
        self.data_dir = Path(__file__).parent / "data"
        self.topics_file = self.data_dir / "active_topics.json"
        self.last_run_file = self.data_dir / "last_run.json"
        self.trigger_file = Path(__file__).parent.parent / "TRIGGER_UPDATE"

        # Initialize fetcher
        serpapi_key = self.config.get("serpapi", {}).get("api_key")
        self.fetcher = KeywordFetcher(serpapi_key=serpapi_key)

        # Scheduler settings
        self.schedule_day = self.config.get("scheduler", {}).get("day", "Monday")
        self.schedule_time = self.config.get("scheduler", {}).get("time", "03:00")
        self.stale_threshold_days = self.config.get("scheduler", {}).get("stale_threshold_days", 14)

    def _load_config(self) -> dict:
        """Load configuration from YAML"""
        if not self.config_path.exists():
            print(f"⚠️  Config file not found: {self.config_path}")
            print("   Using default settings")
            return {
                "scheduler": {
                    "day": "Monday",
                    "time": "03:00",
                    "stale_threshold_days": 14
                }
            }

        with open(self.config_path, 'r') as f:
            return yaml.safe_load(f)

    def load_active_topics(self) -> List[Dict]:
        """Load active topics from active_topics.json"""
        if not self.topics_file.exists():
            print(f"⚠️  Topics file not found: {self.topics_file}")
            return []

        with open(self.topics_file, 'r') as f:
            data = json.load(f)
            return data.get("topics", [])

    def save_last_run(self, topics_updated: List[str]):
        """Save last run metadata"""
        self.data_dir.mkdir(parents=True, exist_ok=True)

        data = {
            "timestamp": datetime.now().isoformat(),
            "topics_updated": topics_updated,
            "total_topics": len(topics_updated)
        }

        with open(self.last_run_file, 'w') as f:
            json.dump(data, f, indent=2)

    def get_last_run(self) -> Optional[dict]:
        """Get last run metadata"""
        if not self.last_run_file.exists():
            return None

        with open(self.last_run_file, 'r') as f:
            return json.load(f)

    def check_manual_trigger(self) -> bool:
        """Check if manual trigger file exists"""
        return self.trigger_file.exists()

    def clear_manual_trigger(self):
        """Remove manual trigger file"""
        if self.trigger_file.exists():
            self.trigger_file.unlink()
            print("✓ Cleared manual trigger file")

    def is_stale(self, intelligence_file: Path) -> bool:
        """
        Check if intelligence file is stale (needs refresh)

        Args:
            intelligence_file: Path to intelligence JSON file

        Returns:
            True if stale or doesn't exist
        """
        if not intelligence_file.exists():
            return True

        try:
            with open(intelligence_file, 'r') as f:
                data = json.load(f)
                last_updated = datetime.fromisoformat(data.get("last_updated", "2000-01-01"))
                age = datetime.now() - last_updated
                return age.days >= self.stale_threshold_days
        except Exception:
            return True

    def flag_stale_content(self) -> List[str]:
        """
        Identify stale keyword intelligence files

        Returns:
            List of stale topic keywords
        """
        topics = self.load_active_topics()
        stale = []

        for topic_data in topics:
            topic = topic_data["topic"]
            keywords = topic_data["keywords"]

            for kw in keywords:
                safe_kw = kw.replace(" ", "-").replace("/", "-")
                intel_file = self.data_dir / f"{topic}-{safe_kw}.json"

                if self.is_stale(intel_file):
                    stale.append(f"{topic}:{kw}")

        return stale

    def update_topic(self, topic: str, keyword: str) -> bool:
        """
        Update keyword intelligence for a single topic

        Args:
            topic: Topic category
            keyword: Primary keyword

        Returns:
            True if successful
        """
        try:
            print(f"\n{'='*70}")
            print(f"Updating: {topic} / {keyword}")
            print(f"{'='*70}")

            intelligence = self.fetcher.fetch_complete_intelligence(topic, keyword)
            self.fetcher.save_intelligence(intelligence)

            return True
        except Exception as e:
            print(f"❌ Failed to update {topic}/{keyword}: {e}")
            return False

    def update_all_topics(self) -> List[str]:
        """
        Update all active topics

        Returns:
            List of successfully updated topics
        """
        topics = self.load_active_topics()
        updated = []

        print(f"\n{'='*70}")
        print(f"KEYWORD INTELLIGENCE UPDATE - {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
        print(f"{'='*70}")
        print(f"Total topics to update: {sum(len(t['keywords']) for t in topics)}")
        print(f"{'='*70}\n")

        for topic_data in topics:
            topic = topic_data["topic"]
            keywords = topic_data["keywords"]
            enabled = topic_data.get("enabled", True)

            if not enabled:
                print(f"⏭️  Skipping disabled topic: {topic}")
                continue

            for keyword in keywords:
                if self.update_topic(topic, keyword):
                    updated.append(f"{topic}:{keyword}")
                    # Rate limiting - be nice to SerpAPI
                    time.sleep(2)

        return updated

    def run_update(self, force: bool = False):
        """
        Run keyword intelligence update

        Args:
            force: Force update even if not stale
        """
        print(f"\n{'#'*70}")
        print(f"# KEYWORD INTELLIGENCE SCHEDULER")
        print(f"# Run started: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
        print(f"{'#'*70}\n")

        # Check if update needed
        if not force:
            stale_items = self.flag_stale_content()
            if not stale_items:
                print("✓ All keyword intelligence is fresh. No update needed.")
                return

            print(f"⚠️  Found {len(stale_items)} stale keyword intelligence files:")
            for item in stale_items[:5]:  # Show first 5
                print(f"   - {item}")
            if len(stale_items) > 5:
                print(f"   ... and {len(stale_items) - 5} more")
            print()

        # Run updates
        updated = self.update_all_topics()

        # Save metadata
        self.save_last_run(updated)

        # Summary
        print(f"\n{'='*70}")
        print(f"UPDATE COMPLETE")
        print(f"{'='*70}")
        print(f"✓ Updated: {len(updated)} keywords")
        print(f"✓ Timestamp: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
        print(f"{'='*70}\n")

    def scheduled_update(self):
        """Scheduled update job (runs weekly)"""
        print(f"\n⏰ Scheduled update triggered at {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
        self.run_update(force=False)

    def check_and_run(self):
        """Check for manual trigger and run if found"""
        if self.check_manual_trigger():
            print("\n🔔 Manual trigger detected!")
            self.clear_manual_trigger()
            self.run_update(force=True)

    def start(self):
        """Start the scheduler (runs indefinitely)"""
        print(f"\n{'#'*70}")
        print(f"# KEYWORD INTELLIGENCE SCHEDULER - STARTING")
        print(f"{'#'*70}")
        print(f"Schedule: Every {self.schedule_day} at {self.schedule_time}")
        print(f"Stale threshold: {self.stale_threshold_days} days")
        print(f"Manual trigger file: {self.trigger_file}")
        print(f"{'#'*70}\n")

        # Schedule weekly update
        getattr(schedule.every(), self.schedule_day.lower()).at(self.schedule_time).do(self.scheduled_update)

        # Check for manual trigger every minute
        schedule.every(1).minutes.do(self.check_and_run)

        print("✓ Scheduler started. Press Ctrl+C to stop.\n")

        while True:
            schedule.run_pending()
            time.sleep(1)


# CLI interface
if __name__ == "__main__":
    import argparse

    parser = argparse.ArgumentParser(description="Keyword Intelligence Scheduler")
    parser.add_argument("--run-now", action="store_true", help="Run update immediately")
    parser.add_argument("--start", action="store_true", help="Start scheduled updates")
    parser.add_argument("--topic", help="Update specific topic only")
    parser.add_argument("--config", help="Path to config.yaml")

    args = parser.parse_args()

    scheduler = KeywordScheduler(config_path=args.config)

    if args.run_now:
        if args.topic:
            # Update specific topic
            topics = scheduler.load_active_topics()
            topic_data = next((t for t in topics if t["topic"] == args.topic), None)

            if not topic_data:
                print(f"❌ Topic not found: {args.topic}")
                exit(1)

            updated = []
            for keyword in topic_data["keywords"]:
                if scheduler.update_topic(args.topic, keyword):
                    updated.append(f"{args.topic}:{keyword}")

            scheduler.save_last_run(updated)
        else:
            # Update all topics
            scheduler.run_update(force=True)

    elif args.start:
        try:
            scheduler.start()
        except KeyboardInterrupt:
            print("\n\n✓ Scheduler stopped by user")

    else:
        # Show status
        last_run = scheduler.get_last_run()
        stale = scheduler.flag_stale_content()

        print(f"\n{'='*70}")
        print("KEYWORD INTELLIGENCE SCHEDULER - STATUS")
        print(f"{'='*70}\n")

        if last_run:
            print(f"Last Run: {last_run['timestamp']}")
            print(f"Topics Updated: {last_run['total_topics']}")
        else:
            print("Last Run: Never")

        print(f"\nStale Items: {len(stale)}")
        if stale:
            print("\nStale keyword intelligence files:")
            for item in stale[:10]:
                print(f"  - {item}")
            if len(stale) > 10:
                print(f"  ... and {len(stale) - 10} more")

        print(f"\n{'='*70}")
        print("Commands:")
        print("  --run-now       Run update immediately")
        print("  --start         Start scheduler daemon")
        print("  --topic TOPIC   Update specific topic only")
        print(f"{'='*70}\n")
