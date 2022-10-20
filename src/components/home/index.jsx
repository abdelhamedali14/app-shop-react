import ww from "../../../src/assets/Developer activity-bro.svg";

const Home = () => {
  return (
    <div>
      <div className="container py-5">
        <div className="row py-5 ">
          <div className="info d-flex justify-content-between align-items-center">
            <div className="col-md-6">
              <div className="">
                <img src={ww} alt="" className="w-75" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="text">
                <p className="text-muted fs-4 ">
                  I am a junior frontend looking for a job. I would like to
                  expand my experience in the field of web development to get
                  more experience to find a job where I can put my knowledge to
                  practical life as well as my skills. have experience with
                  Html5 ,CSS3 ,ES6,Javascript,Bootstrap,Jquery,adobe xd
                  ,SASS,Git, framework (react js).
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
