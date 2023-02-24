import React, { useState, useEffect } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
const MovieDetails = () => {
  const params = useParams();
  const [movie, setMovie] = useState([]);
  console.log(params.id);
  // Get All Movies By Axios
  const getMovieDetails = async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${params.id}?api_key=52ef927bbeb21980cd91386a29403c78&language=ar`
    );
    setMovie(res.data);
  };
  useEffect(() => {
    getMovieDetails();
  }, []);
  return (
    <div>
      <Row className="justify-content-center">
        <Col md="12" xs="12" sm="12" className="mt-4">
          <div className="card-detalis d-flex align-items-center">
            <img
              className="img-movie"
              src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path}
              alt="img_movie"
            />
            <div className="text-center justify-content-center mx-auto">
              <p
                style={{ fontFamily: "Cairo" }}
                className="card-text-details border-bottom"
              >
                أسم الفيلم: {movie.title}
              </p>
              <p
                style={{ fontFamily: "Cairo" }}
                className="card-text-details border-bottom"
              >
                تاريخ الفيلم: {movie.release_date}
              </p>
              <p
                style={{ fontFamily: "Cairo" }}
                className="card-text-details border-bottom"
              >
                عدد المقيمين: {movie.vote_count}
              </p>
              <p
                style={{ fontFamily: "Cairo" }}
                className="card-text-details border-bottom"
              >
                التقييم: {movie.vote_average}
              </p>
            </div>
          </div>
        </Col>
      </Row>
      <Col md="12" xs="12" sm="12" className="mt-4">
        <div className="card-story d-flex flex-column align-items-start">
          <div className="text-end p-4">
            <p className="card-text-title border-bottom">القصة: </p>
          </div>
          <div className="mx-5 px-4">
            <p className="card-text-story">{movie.overview}</p>
          </div>
          <Col
            md="12"
            xs="12"
            sm="12"
            className="m-2 d-flex justify-content-center"
          >
            <div className="card-buttons">
              <Link to={"/"}>
                <Button
                  style={{
                    backgroundColor: "#b45b35",
                    border: "none",
                    fontSize: "20px",
                    borderRadius: "10px 10px 0 0",
                  }}
                  className="btn btn-primary mx-2"
                >
                  عودة للرئيسية
                </Button>
              </Link>
              <a href={movie.homepage}>
                <Button
                  style={{
                    backgroundColor: "#b45b35",
                    border: "none",
                    fontSize: "20px",
                    borderRadius: "10px 10px 0 0",
                  }}
                  className="btn btn-primary mx-2"
                >
                  مشاهدة الفيلم
                </Button>
              </a>
            </div>
          </Col>
        </div>
      </Col>
    </div>
  );
};

export default MovieDetails;
