import { MdArrowOutward } from "react-icons/md";

interface Props {
  image: string;
  alt?: string;
  link?: string;
}

const WorkImage = ({ image, alt, link }: Props) => {
  return (
    <div className="work-image">
      <a
        className="work-image-in"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        {link && (
          <div className="work-link">
            <MdArrowOutward />
          </div>
        )}

        <img
          src={image}
          alt={alt}
          className="project-image"
        />
      </a>
    </div>
  );
};

export default WorkImage;