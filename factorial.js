export default function facto(n) {
	let res = 1;
	for (let i = 1; i < n + 1; i += 1) {
		res *= i;
	}
	return res;
}
