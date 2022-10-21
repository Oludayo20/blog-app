import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { db } from "../firebase";
import Spinner from "./Spinner";

const MostPopular = ({ blog }) => {
  const [related, setRelated] = useState(null);

  const getRelatedBlog = async () => {
    const blogRef = collection(db, "blogs");
    const catQuery = query(blogRef, where("category", "==", `${blog}`));
    const querySnapshot = await getDocs(catQuery);
    let relatedBlog = [];
    querySnapshot.forEach((doc) => {
      relatedBlog.push({ id: doc.id, ...doc.data() });
    });
    setRelated(relatedBlog);
  };

  useEffect(() => {
    getRelatedBlog();
  }, [!related]);

  console.log(related);

  const navigate = useNavigate();

  return (
    <div>
      <div className="blog-heading text-start pt-3 py-2 mb-4">Related Blog</div>
      {related?.map((item) => (
        <div
          className="row pb-3"
          key={item.id}
          style={{ cursor: "pointer" }}
          onClick={() => navigate(`/detail/${item.id}`)}
        >
          <div className="col-5 align-self-center">
            <img
              src={item.imgUrl}
              alt={item.title}
              className="most-popular-img"
            />
          </div>
          <div className="col-7 padding">
            <div className="text-start most-popular-font">{item.title}</div>
            <div className="text-start most-popular-font-meta">
              {item.timestamp.toDate().toDateString()}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MostPopular;
