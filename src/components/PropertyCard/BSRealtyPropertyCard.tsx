import { BSRealtyButton } from '../Button/BSRealtyButton';
import './BSRealtyPropertyCard.css';

export interface BSRealtyPropertyCardProps {
  /** Property image URL */
  image: string;
  /** Price e.g. "$480,000" */
  price: string;
  /** Property name e.g. "Rosewood Manor" */
  name: string;
  /** Full address */
  address: string;
  /** Number of bedrooms */
  beds: number;
  /** Number of bathrooms */
  baths: number;
  /** Square footage e.g. "1,850 sqft" */
  sqft: string;
  /** Called when View Detail is clicked */
  onViewDetail?: () => void;
}

export const BSRealtyPropertyCard = ({
  image,
  price,
  name,
  address,
  beds,
  baths,
  sqft,
  onViewDetail,
}: BSRealtyPropertyCardProps) => {
  return (
    <div className="bsr-property-card">

      {/* ── Image ───────────────────────────────────────── */}
      <div className="bsr-property-card__image">
        <img src={image} alt={name} />
      </div>

      {/* ── Content ─────────────────────────────────────── */}
      <div className="bsr-property-card__content">

        {/* Info row: price/name/address + button */}
        <div className="bsr-property-card__info">
          <div className="bsr-property-card__text">
            <span className="bsr-property-card__price">{price}</span>
            <span className="bsr-property-card__name">{name}</span>
            <span className="bsr-property-card__address">{address}</span>
          </div>

          {/*
            Reusing BSRealtyButton — no need to rebuild a button.
            This is the whole point of a component library.
          */}
          <BSRealtyButton
            variant="secondary"
            size="small"
            label="View Detail"
            showLeftIcon={false}
            showRightIcon={true}
            onClick={onViewDetail}
          />
        </div>

        {/* Details row: beds · baths · sqft */}
        <div className="bsr-property-card__details">
          <span>{beds} BHK</span>
          <span>{baths} Bath</span>
          <span>{sqft}</span>
        </div>

      </div>
    </div>
  );
};
