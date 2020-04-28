function Catt() {
	// body...
	this.stomach = [];
}
Catt.prototype.eat = function(cut) {
	this.stomach.push(cut);
};
module.export = Catt;