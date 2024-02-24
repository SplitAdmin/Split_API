class Result {
    constructor(value, error = "", isSuccess = true) {
        this.value = value;
        this.error = error;
        this.isSuccess = isSuccess;
    }
}
export default Result