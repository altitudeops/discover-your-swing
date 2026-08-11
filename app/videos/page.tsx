import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/Sections";
import { VideoGallery } from "@/components/VideoGallery";
import { breadcrumbJsonLd, pageMetadata, videoListJsonLd } from "@/lib/seo";
import { videos } from "@/lib/site-data";

export const metadata: Metadata = pageMetadata({
  title: "Golf Coaching Videos",
  description:
    "A curated library of swing, performance, and player-development videos from Christie Quinn — keep learning between lessons.",
  path: "/videos",
});

export default function VideosPage() {
  return (
    <>
      <JsonLd
        data={[
          videoListJsonLd(),
          breadcrumbJsonLd([
            ["Home", "/"],
            ["DYS Videos", "/videos"],
          ]),
        ]}
      />
      <PageHero
        eyebrow="DYS Videos"
        title="Coaching videos from Discover Your Swing®."
        copy="A curated library of swing, performance, and player-development videos for golfers who want to keep learning between lessons."
        image="/images/on-course.jpg"
        imagePosition="center top"
      />
      <section className="section-pad bg-white">
        <div className="container">
          <VideoGallery videos={videos} />
        </div>
      </section>
    </>
  );
}
