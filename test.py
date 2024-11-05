input1 = "leetcode"
input2 = "loveleetcode"
input3 = "aabb"

def first_unique_char(s: str) -> int:
    used = []
    for i, letter in enumerate(s):
        if letter in used:
            return i
        used.append(letter)
    return -1

print(first_unique_char(input1))