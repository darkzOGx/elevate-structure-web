#!/usr/bin/env python3
"""
Convert YAML frontmatter to JSON frontmatter for blog posts.
Expected by add-blog-posts.js script.
"""

import os
import re
import json
import sys

def convert_yaml_to_json(yaml_str):
    """Parse YAML-like frontmatter and convert to JSON dict."""
    result = {}

    # Parse simple key-value pairs
    for line in yaml_str.strip().split('\n'):
        line = line.strip()
        if not line or line.startswith('#'):
            continue

        # Skip nested schema items
        if line.startswith('type:') or line.startswith('localBusiness:') or line.startswith('faq:'):
            continue
        if line == 'schema:':
            continue

        # Match key: value patterns
        match = re.match(r'^(\w+):\s*(.*)$', line)
        if match:
            key, value = match.groups()

            # Handle arrays
            if value.startswith('[') and value.endswith(']'):
                # Parse array
                array_content = value[1:-1]
                if array_content:
                    items = re.findall(r'"([^"]*)"', array_content)
                    result[key] = items
                else:
                    result[key] = []
            # Handle quoted strings
            elif value.startswith('"') and value.endswith('"'):
                result[key] = value[1:-1]
            # Handle booleans
            elif value.lower() in ('true', 'false'):
                result[key] = value.lower() == 'true'
            else:
                result[key] = value

    return result

def transform_to_expected_format(yaml_data, content):
    """Transform YAML data to expected JSON format."""

    # Date conversion: 2026-01-30 -> January 30, 2026
    date_str = yaml_data.get('publishDate', '2026-01-30')
    months = ['January', 'February', 'March', 'April', 'May', 'June',
              'July', 'August', 'September', 'October', 'November', 'December']
    try:
        parts = date_str.split('-')
        month_name = months[int(parts[1]) - 1]
        formatted_date = f"{month_name} {int(parts[2])}, {parts[0]}"
    except:
        formatted_date = "January 30, 2026"

    # Get primary city from geoTarget
    primary_city = yaml_data.get('geoTarget', '')

    # Extract service name from title (before "in City")
    title = yaml_data.get('title', '')
    service_match = re.match(r'^(.+?)\s+in\s+', title)
    service_name = service_match.group(1) if service_match else title

    # Get secondary cities from content (mentioned cities)
    secondary_cities = []
    city_patterns = [
        'Anaheim', 'Irvine', 'Santa Ana', 'Orange', 'Fullerton', 'Costa Mesa',
        'Newport Beach', 'Huntington Beach', 'Garden Grove', 'Tustin',
        'Los Angeles', 'San Diego', 'Long Beach', 'Riverside', 'Ontario',
        'Corona', 'Murrieta', 'Temecula', 'Oceanside', 'Carlsbad', 'Escondido',
        'Vista', 'Rancho Cucamonga', 'Fontana', 'Moreno Valley', 'Chula Vista',
        'Encinitas', 'La Jolla', 'Del Mar', 'Pasadena', 'Glendale', 'Burbank'
    ]
    for city in city_patterns:
        if city != primary_city and city.lower() in content.lower():
            secondary_cities.append(city)
            if len(secondary_cities) >= 3:
                break

    # Build JSON structure
    json_data = {
        "category": yaml_data.get('category', 'Structural Engineering'),
        "title": title,
        "publishDate": formatted_date,
        "primaryCity": primary_city,
        "secondaryCities": secondary_cities[:3] if secondary_cities else ["Orange County", "Los Angeles", "San Diego"],
        "serviceName": service_name,
        "primaryKeyword": yaml_data.get('primaryKeyword', ''),
        "secondaryKeywords": yaml_data.get('secondaryKeywords', []),
        "hubPage": yaml_data.get('hubPage', ''),
        "topicCluster": yaml_data.get('topicCluster', ''),
        "author": yaml_data.get('author', 'AAA Engineering Team'),
        "readTime": "15 min read",
        "image": "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800"
    }

    return json_data

def convert_file(filepath):
    """Convert a single file from YAML to JSON frontmatter."""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Check if already JSON format
    if content.strip().startswith('{'):
        print(f"  Skipping {os.path.basename(filepath)} - already JSON format")
        return False

    # Extract YAML frontmatter
    yaml_match = re.match(r'^---\n(.*?)\n---\n(.*)$', content, re.DOTALL)
    if not yaml_match:
        print(f"  ERROR: No YAML frontmatter found in {os.path.basename(filepath)}")
        return False

    yaml_content = yaml_match.group(1)
    markdown_content = yaml_match.group(2).strip()

    # Parse YAML
    yaml_data = convert_yaml_to_json(yaml_content)

    # Transform to expected format
    json_data = transform_to_expected_format(yaml_data, markdown_content)

    # Build new content
    json_str = json.dumps(json_data, indent=2)
    new_content = f"{json_str}\n\n---\n\n{markdown_content}"

    # Write back
    with open(filepath, 'w', encoding='utf-8', newline='\n') as f:
        f.write(new_content)

    print(f"  Converted: {os.path.basename(filepath)}")
    return True

def main():
    # Get directory from command line or use default
    if len(sys.argv) > 1:
        blog_dir = sys.argv[1]
    else:
        blog_dir = 'blog-posts-jan-30-2026'

    if not os.path.isabs(blog_dir):
        blog_dir = os.path.join(os.path.dirname(os.path.dirname(__file__)), blog_dir)

    if not os.path.exists(blog_dir):
        print(f"Directory not found: {blog_dir}")
        sys.exit(1)

    print(f"Converting files in: {blog_dir}")

    # Find all markdown files
    md_files = sorted([f for f in os.listdir(blog_dir) if f.endswith('.md')])

    converted = 0
    for filename in md_files:
        filepath = os.path.join(blog_dir, filename)
        if convert_file(filepath):
            converted += 1

    print(f"\nConverted {converted} files")

if __name__ == '__main__':
    main()
