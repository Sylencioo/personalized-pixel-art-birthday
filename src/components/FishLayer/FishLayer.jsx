import './fishLayer.css';
import fish1 from '../../assets/fish/fish1.svg';
import fish2 from '../../assets/fish/fish2.svg';
import fish3 from '../../assets/fish/fish3.svg';

export default function FishLayer(){
  return (
    <div className="fish-layer" aria-hidden="true">
      <img src={fish1} className="fish fish--one" alt="" />
      <img src={fish2} className="fish fish--two" alt="" />
      <img src={fish3} className="fish fish--three" alt="" />
      <img src={fish1} className="fish fish--four" alt="" />
      <img src={fish2} className="fish fish--five" alt="" />
    </div>
  );
}