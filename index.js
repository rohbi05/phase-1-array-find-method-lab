// code your solution here
function superbowlWin(someArray) {
	for (const i of someArray) {
		if (i.result === "W") {
			return i.year;
		}
	}
}

