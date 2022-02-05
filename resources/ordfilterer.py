read = open("resources/fullformsliste.txt", "r", encoding="utf8")
write = open("resources/5_bokstaver.txt", "a", encoding="utf8")

written = []

for line in read.readlines():
    data = line.split("\t")
    word = data[2].strip()
    if word.isalpha() and len(word) == 5 and word[0].islower():
        if word not in written:
            write.write(word + "\n")
        written.append(word)

print("Ferdig")