import React, { useEffect, useRef, useState } from "react";
import SampleForm from "./SampleForm";
// hooks cho phép tương tác với phần tử DOM
export default function Ref() {
  const inputRef = useRef();
  const inputFileRef = useRef();

  // bài tập Form
  const formRef = useRef();

  // bài tập Debounce
  const timer = useRef();
  const [searchTerm, setSearchTerm] = useState("");

  // hàm useEffect để giao diện chạy xong thì mới DOM tới giao diện, vì khi tạo thì setState chạy trước nên không có giá trị
  // hàm focus để tự động trỏ tới
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  //
  const handleSubmit = (values) => {
    console.log(values);
  };

  const handleChangeSearchTerm = (evt) => {
    setSearchTerm(evt.target.value);
    clearTimeout(timer.current);

    timer.current = setTimeout(() => {
      alert(evt.target.value);
    }, 300);
    // console.log(timer.current);
  };

  return (
    <div>
      <h1 className="text-center text-success">REF</h1>
      <hr />
      {/* INPUT CÓ VALUE THÌ PHẢI XÀI ONCHANGE */}
      <input type="text" placeholder="Input Your Message" ref={inputRef} />
      <hr />
      <input type="file" hidden ref={inputFileRef} />
      <button
        className="btn btn-success"
        onClick={() => inputFileRef.current.click()}
      >
        Upload File
      </button>

      <hr />

      <SampleForm ref={formRef} onSubmit={handleSubmit} />
      <button
        className="btn btn-primary"
        onClick={() => {
          formRef.current.requestSubmit();
        }}
      >
        Submit
      </button>
      <hr />
      <div className="mb-3">
        <label className="form-label " htmlFor="">
          DEMO DEBOUNCE
        </label>
        <input
          className="form-control"
          value={searchTerm}
          onChange={handleChangeSearchTerm}
        />
      </div>
    </div>
  );
}
