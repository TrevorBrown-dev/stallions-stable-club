import { SpanningCard } from "../../components/SpanningCard"

export const Testimonials: React.FC = () => {
    return (
        <section className="testimonials">

            <div className="spacer" style={{ marginBottom: '5em' }}></div>
            <SpanningCard>
                <div className="center-content">
                    <h2>An experience like no other...</h2>

                </div>
            </SpanningCard>
        </section>
    );
}