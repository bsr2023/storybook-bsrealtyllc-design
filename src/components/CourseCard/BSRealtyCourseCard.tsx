import './BSRealtyCourseCard.css'

export interface BSRealtyCourseCardProps {
    /**  Image URL for course card */
    imageUrl: string;

    /** Title of course */
    title: string;

    /** Description/Summary of course */
    description: string;

    /** Text for action link */
    actionText?: string;

    /** Click handler for action link */
    onActionClick?: () => void;

}

// ArrowRight icon
const ArrowRightIcon = ({ size }: { size: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="5" y1="12" x2="19" y2="12" />
        <polyline points="12 5 19 12 12 19" />
    </svg>
);

export const BSRealtyCourseCard = ({
    imageUrl,
    title,
    description,
    actionText = 'Learn More',
    onActionClick,

}: BSRealtyCourseCardProps) => {
    return (
        <div className={['bsr-course-card'].join(' ')}>
            <div className="bsr-course-card_image-container">
                <img src={imageUrl} alt={title} className="bsr-course-card_image" />
            </div>

            <div className="bsr-course-card_content">
                <h3 className="bsr-course-card_title">{title}</h3>
                <p className="bsr-course-card_description">{description}</p>

            </div>
            {onActionClick || actionText ? (
                <> <button type="button" className="bsr-course-card_action">{actionText} <ArrowRightIcon size={16} /></button>
                </>
            ) : null}

        </div>
    )
}