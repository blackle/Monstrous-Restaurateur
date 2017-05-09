#!/usr/bin/env python2.7

import sys
import re
import os
from sets import Set
from subprocess import call

visited = Set()
basepath = "./src"

def process_file(file_in_path, file_out):
	global visited
	global basepath
	if (file_in_path in visited):
		return
	else:
		visited.add(file_in_path)

	file_in = open(file_in_path, "r")
	for line in file_in:
		rel = re.search('^#include "([^"]+)"', line)
		root = re.search('^#include <([^>]+)>', line)
		if (rel):
			dirname = os.path.dirname(file_in_path)
			process_file(dirname + "/" + rel.group(1), file_out)
		elif (root):
			process_file(os.getcwd() + "/" + basepath + "/" + root.group(1), file_out)
		else:
			file_out.write(line)
	file_in.close()
	file_out.write("\n")

def main():
	file_out = open("./build/main.ts", "w")
	process_file("./src/main/main.ts", file_out)
	file_out.close()
	call("tsc ./build/main.ts --module none --target es5 --outDir build".split(" "));

if __name__ == "__main__":
	main();