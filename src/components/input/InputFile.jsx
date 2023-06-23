const InputFile = () => {
  const HandleSubmit = (e) => {
    e.preventDefault();
    let data = new FormData();
    data.append("images", document.getElementById("image-upload").files[0]);
    document.getElementById("text-upload").innerHTML =
      document.getElementById("image-upload").files[0].name;
    axios
      .post("http://192.168.1.138:8000/api/store-image", data, {
        "content-type": "multipart/form-data",
      })
      .then(({ data }) => {
        changeStyle({
          property: props.property,
          value: data.name,
        });
      })
      .catch((response) => {
        console.log(response);
      });
  };

  const dropzoneActive = (event) => {
    var reader = new FileReader();
    reader.onload = function () {
      var output = document.getElementById("output");
      output.src = reader.result;
    };
    reader.readAsDataURL(event.target.files[0]);
  };
  return (
    <div>
      <div>
        <form onSubmit={(e) => HandleSubmit(e)} encType="multipart/form-data">
          <div className="w-100 d-flex justify-content-between">
            <button
              className="btn btn-primary text-white rounded-b-none"
              type="submit"
              style={{}}
            >
              Submit
            </button>
          </div>

          <div className="d-flex justify-content-center align-items-center w-100">
            <label
              htmlFor="image-upload"
              className="
              d-flex flex-column align-items-center justify-content-center
              flex flex-col items-center justify-center w-full h-64 rounded  position-relative"
              id="box-upload"
              style={{ height: "256px", border: "1px solid white" }}
            >
              <img
                id="output"
                className="position-absolute top-0"
                style={{ top: "0", height: "200px" }}
              />
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <img src="icon/image-ico.svg" alt="" />
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-semibold" id="text-upload">
                    Click to upload or drag and drop
                  </span>
                </p>
              </div>
              <input
                id="image-upload"
                type="file"
                className="hidden"
                onChange={(e) => dropzoneActive(e)}
              />
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InputFile;
