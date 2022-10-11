import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getArts } from "../../redux/Features/art-slice";
import { BsArrowRight } from "react-icons/bs";
import Button from "../button/Button";

const Categories = () => {
  const [artsCollection, setArtsCollection] = React.useState();
  const { arts } = useSelector((state) => state.art);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getArts());
    setArtsCollection(arts);
  }, [dispatch, arts]);

  console.log(arts);

  return (
    <div className="flex flex-col pt-10">
      <div className="flex flex-row justify-between">
        <div>
          <h2 className="font-semibold text-[40px]" >Art in the collection</h2>
          <p className="mt-6 w-3/5">
            Browse a curated selection of art around the world, Including museum
            exhibitions, gallery openings, upcoming and many more
          </p>
        </div>
        <div className="mt-6">
          <input placeholder="search" className="bg-[#1A1405] rounded-3xl  h-12 w-[530px] text-[#FBAF00] px-6" />
        </div>
      </div>
      <div className="grid-cols-2 md:grid-cols-3 lg:grid-cols-4 flex flex-row flex-wrap items-center justify-evenly gap-x-24 mt-11">
        {artsCollection?.data?.map((art) => (
          <div
            key={art.id}
            className="h-[25rem] w-64 bg-[#1A1405] my-10 rounded-tl-[6rem] rounded-br-[4rem] flex flex-col items-center justify-around"
          >
            <div className="h-[15rem] w-64 object-fit">
              <img
                src={`https://www.artic.edu/iiif/2/${art.image_id}/full/843,/0/default.jpg`}
                alt={art.thumbnail.alt_text}
                className="h-full w-full rounded-tl-[6rem] object-cover"
              />
            </div>
            <div>
              <h5 className="my-2 mx-3">{art.title}</h5>
              <h5 className="my-2 mx-3">{art.timestamp}</h5>
              <h5 className="my-2 mx-3">
                {art.artist_title} {" , "}
                {art.place_of_origin}
              </h5>
            </div>
          </div>
        ))}
      </div>
      <div className="items-center justify-center w-100% my-16 mx-auto">
        <Button children="Explore arts" others={<BsArrowRight />} />
      </div>
    </div>
  );
};

export default Categories;
