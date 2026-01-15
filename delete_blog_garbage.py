
import os

file_path = r"c:\Users\bigbi\Projects\elevate-structure-web\src\lib\blog-data.ts"
start_delete = 236088
end_delete = 236622

with open(file_path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

# 1-indexed to 0-indexed
# We want to keep lines 0 to start_delete-2 (i.e. up to line 236087)
# And keep lines end_delete to end (i.e. starting from line 236623)
# index for 236087 is 236086.
# index for 236088 is 236087. (Start of delete)
# index for 236622 is 236621. (End of delete)
# Lines to keep: [:236087] + [236622:]

# Let's double check indices:
# line 1 -> index 0
# line 236087 -> index 236086.
# line 236088 -> index 236087.
# We slice lines[:236088-1] -> lines[:236087]. This keeps indices 0 to 236086. Correct.

# End slice:
# We want to start keeping again at line 236623.
# index for 236623 is 236622.
# So we slice lines[236622:].
# This skips indices 236087 to 236621 inclusive.
# 236621 is line 236622. Correct.

new_lines = lines[:start_delete-1] + lines[end_delete:]

with open(file_path, 'w', encoding='utf-8') as f:
    f.writelines(new_lines)

print(f"Successfully deleted lines {start_delete} to {end_delete}. New line count: {len(new_lines)}")
