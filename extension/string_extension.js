(
    () => {
        String.prototype.isNullOrEmpty = function () {
            console.log(this);
            return this == false;
        }
    }
)();