read = open("src/utils/resources/fullformsliste.txt", "r", encoding="utf8")
write = open("src/utils/resources/5_bokstaver_gjett.json", "a", encoding="utf8")

written = []

write.write("[\n")
for line in read.readlines():
    data = line.split("\t")
    word = data[1].strip()
    if word.isalpha() and len(word) == 5 and word[0].islower():
        if word not in written:
            write.write("\"" + word + "\",\n")
        written.append(word)

write.write("]")
print("Ferdig")
write.close()
read.close()