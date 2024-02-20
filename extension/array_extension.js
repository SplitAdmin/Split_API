(() => {
    Array.prototype.FirstOrDefault = function (args) {
        if (args == null)
            return this.length === 0 ? null : this[0];
        var ele = this.find(args);
        return ele == undefined ? null : ele;
    }
    Array.prototype.First = function (args) {
        if (args == null) {
            if (this.length === 0)
                throw new Error("Array is empty!");
            return this[0];
        }
        var ele = this.find(args);
        if (ele == undefined)
            throw new Error("No such element found!");
        return ele;
    }
})();