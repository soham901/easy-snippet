"use client";

import Input from "@/components/ui/forms/input";
import React, { useEffect, useState } from "react";

import { useRouter } from "next/navigation";

// import domtoimage from "dom-to-image";
// import html2canvas from "html2canvas";
import * as htmlToImage from "html-to-image";

import Image from "next/image";
import Link from "next/link";

function Generate() {
  const [author, setAuthor] = useState("");
  const [imgPath, setImgPath] = useState("");
  const [comment, setComment] = useState("");
  const router = useRouter();

  const onAuthorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAuthor(e.target.value);
  };

  const onCommentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
  };

  const setRandoms = () => {
    const names = [
      "LOLika Jain",
      "Hilarioush Bhat",
      "HaHa Shetty",
      "Samosa Swami",
      "Desi Dynamo",
      "Chai Charmer",
      "Dhokla Desai",
      "Gulati Gokhale",
      "Tandoori Taneja",
      "Idli Iyer",
      "Jethalal",
      "Champak Chacha",
      "Goli",
      "Pappu Paratha",
      "Kurkure Kumar",
      "Bhupendra Jogi",
      "Chaat Choudhary",
      "Lassi Lal",
      "Jalebi Gupta",
    ];

    const imgs = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpeg"];

    const randomName = names[Math.floor(Math.random() * names.length)];
    setAuthor(randomName);

    const randomImg = imgs[Math.floor(Math.random() * imgs.length)];
    setImgPath(randomImg);
  };

  const onGenerate = () => {
    (document.getElementById("my_modal_2") as HTMLDialogElement)?.showModal();
  };

  const onDownload = () => {
    const node = document.getElementById("result") as HTMLElement;

    htmlToImage.toPng(node).then(function (dataUrl) {
      setTimeout(() => {
        const link = document.createElement("a");
        link.href = dataUrl;
        link.download = `${author || "Anonymous"}-${Date.now()}.png`;
        link.click();
      }, 2000);
    });
  };

  useEffect(() => {
    setRandoms();
    console.log("useEffect");
  }, []);

  return (
    <div className="mt-16 py-8 px-12">
      <div className="flex flex-col p-4 border shadow-md shadow-current gap-2 rounded-md max-w-md m-auto w-full">
        <div className="text-xl font-bold">Enter Details</div>
        <div className="divider p-0 my-0"></div>
        <Input
          label="Author"
          onChange={onAuthorChange}
          value={author}
          btn={
            <button className="btn btn-primary" onClick={() => setRandoms()}>
              Random
            </button>
          }
        />
        <Input
          label="Comment"
          type="textarea"
          onChange={onCommentChange}
          value={comment}
        />
        <button onClick={onGenerate} className="btn btn-success">
          Generate
        </button>
      </div>

      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <div
            id="result"
            className="flex items-start space-x-4 p-4 bg-zinc-100 border-b text-zinc-900 rounded-lg border-2 border-base-content"
          >
            <Image
              id="avatarImg"
              src={`/avatars/${imgPath}`}
              alt="User Avatar"
              className="w-16 h-16 rounded-full border-2 border-base-content"
              width={60}
              height={60}
            />
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h3 className="text-zinc-900 font-semibold">
                  {author || "Anonymous"}
                </h3>
                <span className="text-gray-500 text-sm">
                  {Math.floor(Math.random() * 10) + 1} hours ago
                </span>
              </div>
              <p className="text-gray-700 mt-2">
                {comment || "This is a sample comment"}
              </p>
              <div className="flex items-center mt-2">
                <button className="text-blue-500 hover:underline mr-4">
                  Reply
                </button>
                <button className="text-red-500 hover:underline mr-4">
                  Like
                </button>
              </div>
            </div>
          </div>

          <div className="flex justify-between">
            <button
              onClick={onDownload}
              className="btn btn-success mt-8 border-2 border-base-content"
            >
              <Image
                src="/icons/download.svg"
                width={22}
                height={22}
                alt="download"
              />
              Download
            </button>
            <Link
              href="https://twitter.com/soham901x"
              className="btn btn-info mt-8 border-2 border-base-content"
            >
              Follow on{" "}
              <Image
                src="/icons/twitter.svg"
                width={22}
                height={22}
                alt="twitter"
              />
            </Link>
            <Link
              href="https://github.com/soham901/comment-snippet-generator"
              className="btn bg-content-base mt-8 border-2 border-base-content"
            >
              Give a Star
              <Image
                src="/icons/github.svg"
                width={22}
                height={22}
                alt="github"
              />
            </Link>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
}

export default Generate;
