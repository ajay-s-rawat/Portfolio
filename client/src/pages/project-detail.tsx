import { useEffect, useState } from "react";
import { useRoute, Link } from "wouter";
import { ArrowLeft, ExternalLink, Github, ImageIcon, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { projectCategories, projects } from "@/data/projects";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

function StoreBadgeButton({
  href,
  type,
}: {
  href: string;
  type: "google-play" | "app-store";
}) {
  const isGooglePlay = type === "google-play";
  const badgePath = `/store-badges/${isGooglePlay ? "play_store.png" : "app_store.png"}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={isGooglePlay ? "Get it on Google Play" : "Download on the App Store"}
      className="inline-block rounded-lg transition-transform duration-200 hover:scale-[1.03] hover:brightness-110 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric-blue focus-visible:ring-offset-2 focus-visible:ring-offset-dark-primary"
    >
      <img
        src={badgePath}
        alt={isGooglePlay ? "Get it on Google Play" : "Download on the App Store"}
        className="h-14 w-auto block md:h-16"
      />
    </a>
  );
}

function ProjectHeroImage({
  src,
  title,
}: {
  src: string;
  title: string;
}) {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div className="flex aspect-video w-full items-end rounded-2xl bg-[radial-gradient(circle_at_top_left,_rgba(35,196,240,0.35),_transparent_35%),linear-gradient(135deg,rgba(10,14,25,1)_0%,rgba(38,24,58,1)_100%)] p-8 shadow-2xl">
        <div>
          <div className="mb-3 text-xs uppercase tracking-[0.26em] text-electric-blue/80">
            Project Visual
          </div>
          <h2 className="max-w-xl text-3xl font-bold text-white lg:text-4xl">{title}</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="aspect-video w-full overflow-hidden rounded-2xl bg-black/35 shadow-2xl">
      <img
        src={src}
        alt={title}
        className="h-full w-full object-contain p-3"
        onError={() => setHasError(true)}
      />
    </div>
  );
}

function MediaImage({
  src,
  alt,
  title,
  compact = false,
}: {
  src: string;
  alt: string;
  title: string;
  compact?: boolean;
}) {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(135deg,rgba(0,212,255,0.14),rgba(139,92,246,0.12))] p-4 text-center">
        <ImageIcon className={compact ? "h-5 w-5 text-white/70" : "h-10 w-10 text-white/70"} />
        {!compact ? <span className="sr-only">{title}</span> : null}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={compact ? "h-full w-full object-cover" : "h-full w-full object-contain p-3"}
      onError={() => setHasError(true)}
    />
  );
}

type MediaItem = {
  type: "image" | "video";
  src: string;
  title: string;
  caption?: string;
  alt?: string;
};

function getVideoEmbedUrl(url: string) {
  try {
    const parsedUrl = new URL(url);

    if (parsedUrl.hostname.includes("youtube.com")) {
      const videoId = parsedUrl.searchParams.get("v");
      return videoId ? `https://www.youtube.com/embed/${videoId}` : url;
    }

    if (parsedUrl.hostname.includes("youtu.be")) {
      const videoId = parsedUrl.pathname.replace("/", "");
      return videoId ? `https://www.youtube.com/embed/${videoId}` : url;
    }

    if (parsedUrl.hostname.includes("vimeo.com")) {
      const videoId = parsedUrl.pathname.split("/").filter(Boolean).pop();
      return videoId ? `https://player.vimeo.com/video/${videoId}` : url;
    }

    return url;
  } catch {
    return url;
  }
}

function ProjectMediaShowcase({ media }: { media: MediaItem[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeMedia = media[activeIndex] ?? media[0];

  if (!activeMedia) {
    return null;
  }

  return (
    <section className="mb-12">
      <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-2xl font-bold">Project Media</h2>
          <p className="mt-2 max-w-2xl text-sm text-gray-400">
            Gameplay, screenshots, and visual proof from the finished work.
          </p>
        </div>
        <div className="flex items-center gap-3 text-sm text-gray-400">
          {media.some((item) => item.type === "video") ? (
            <span className="inline-flex items-center gap-1.5">
              <Play className="h-4 w-4 text-electric-blue" />
              {media.filter((item) => item.type === "video").length} video
            </span>
          ) : null}
          {media.some((item) => item.type === "image") ? (
            <span className="inline-flex items-center gap-1.5">
              <ImageIcon className="h-4 w-4 text-vibrant-purple" />
              {media.filter((item) => item.type === "image").length} images
            </span>
          ) : null}
        </div>
      </div>

      <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/30 shadow-2xl">
        <div className="aspect-video bg-black">
          {activeMedia.type === "video" ? (
            <iframe
              src={getVideoEmbedUrl(activeMedia.src)}
              title={activeMedia.title}
              className="h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          ) : (
            <MediaImage
              src={activeMedia.src}
              alt={activeMedia.alt ?? activeMedia.title}
              title={activeMedia.title}
            />
          )}
        </div>

        <div className="border-t border-white/10 p-5">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h3 className="text-lg font-semibold">{activeMedia.title}</h3>
              {activeMedia.caption ? (
                <p className="mt-1 text-sm leading-relaxed text-gray-300">{activeMedia.caption}</p>
              ) : null}
            </div>
            <span className="mt-2 inline-flex w-fit items-center gap-1.5 rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-wide text-gray-300 sm:mt-0">
              {activeMedia.type === "video" ? (
                <Play className="h-3.5 w-3.5 text-electric-blue" />
              ) : (
                <ImageIcon className="h-3.5 w-3.5 text-vibrant-purple" />
              )}
              {activeMedia.type}
            </span>
          </div>

          {media.length > 1 ? (
            <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
              {media.map((item, index) => {
                const isActive = index === activeIndex;

                return (
                  <button
                    key={`${item.type}-${item.src}`}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className={`group overflow-hidden rounded-lg border text-left transition ${
                      isActive
                        ? "border-electric-blue bg-electric-blue/10"
                        : "border-white/10 bg-white/5 hover:border-white/30"
                    }`}
                    aria-label={`Show ${item.title}`}
                  >
                    <div className="relative aspect-video bg-black/60">
                      {item.type === "image" ? (
                        <MediaImage
                          src={item.src}
                          alt={item.alt ?? item.title}
                          title={item.title}
                          compact
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center">
                          <Play className="h-7 w-7 text-electric-blue" />
                        </div>
                      )}
                      <div className="absolute left-2 top-2 rounded-full bg-black/65 p-1">
                        {item.type === "video" ? (
                          <Play className="h-3.5 w-3.5 text-electric-blue" />
                        ) : (
                          <ImageIcon className="h-3.5 w-3.5 text-white" />
                        )}
                      </div>
                    </div>
                    <div className="p-2">
                      <p className="line-clamp-2 text-xs font-medium text-gray-200">{item.title}</p>
                    </div>
                  </button>
                );
              })}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}

export default function ProjectDetail() {
  const [, params] = useRoute("/project/:slug");
  const project = projects.find((item) => item.slug === params?.slug);
  const categoryLabels =
    project?.categories.map(
      (categoryId) =>
        projectCategories.find((category) => category.id === categoryId)?.label ?? categoryId,
    ) ?? [];
  const platformLabel = project?.platforms?.join(" / ") ?? "Cross-platform";
  const roleLabel = project?.role ?? "Unity Developer";
  const overview = project?.overview ?? [
    "This project showcases my expertise in Unity development and demonstrates my ability to create engaging, high-quality interactive experiences.",
    "The implementation involved careful attention to performance optimization, user experience design, and scalable technical architecture.",
  ];
  const coverImage = project?.coverImage ?? project?.image ?? "";
  const mediaItems: MediaItem[] = project
    ? [
        ...(project.links.video
          ? [
              {
                type: "video" as const,
                src: project.links.video,
                title: `${project.title} Video`,
                caption: "Playable project footage or demo video.",
              },
            ]
          : []),
        ...(project.showcaseImages?.map((image) => ({
          type: "image" as const,
          src: image.src,
          title: image.title ?? project.title,
          caption: image.caption,
          alt: image.alt,
        })) ?? []),
        {
          type: "image" as const,
          src: coverImage,
          title: `${project.title} Cover`,
          caption: project.description,
          alt: project.title,
        },
      ]
    : [];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen bg-dark-primary text-white">
        <Navigation />
        <div className="pt-24 pb-12">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
            <Link href="/">
              <Button className="bg-electric-blue text-dark-primary">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dark-primary text-white">
      <Navigation />

      <div className="pt-24 pb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link href="/">
              <Button
                variant="outline"
                className="border-electric-blue text-electric-blue hover:bg-electric-blue hover:text-dark-primary"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Portfolio
              </Button>
            </Link>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            <div>
              <ProjectHeroImage src={coverImage} title={project.title} />
            </div>
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold mb-4">{project.title}</h1>
                <p className="text-xl text-gray-300 leading-relaxed">{project.description}</p>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className={
                      index % 2 === 0
                        ? "bg-electric-blue/20 text-electric-blue"
                        : "bg-vibrant-purple/20 text-vibrant-purple"
                    }
                  >
                    {tech}
                  </Badge>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                {project.links.github ? (
                  <Button asChild className="bg-electric-blue text-dark-primary hover:bg-electric-blue/90">
                    <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </a>
                  </Button>
                ) : null}
                {project.links.demo ? (
                  <Button
                    asChild
                    variant="outline"
                    className="border-vibrant-purple text-vibrant-purple hover:bg-vibrant-purple hover:text-white"
                  >
                    <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                ) : null}
                {project.links.googlePlay ? (
                  <StoreBadgeButton href={project.links.googlePlay} type="google-play" />
                ) : null}
                {project.links.appStore ? (
                  <StoreBadgeButton href={project.links.appStore} type="app-store" />
                ) : null}
                {project.links.store ? (
                  <Button
                    asChild
                    variant="outline"
                    className="border-electric-blue text-electric-blue hover:bg-electric-blue hover:text-dark-primary"
                  >
                    <a href={project.links.store} target="_blank" rel="noopener noreferrer">
                      Download
                    </a>
                  </Button>
                ) : null}
                {project.links.video ? (
                  <Button
                    asChild
                    variant="outline"
                    className="border-vibrant-purple text-vibrant-purple hover:bg-vibrant-purple hover:text-white"
                  >
                    <a href={project.links.video} target="_blank" rel="noopener noreferrer">
                      <Play className="w-4 h-4 mr-2" />
                      Watch Video
                    </a>
                  </Button>
                ) : null}
              </div>
            </div>
          </div>

          <ProjectMediaShowcase media={mediaItems} />

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <Card className="glass-morphism rounded-2xl">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6">Project Overview</h2>
                  <div className="space-y-4 text-gray-300">
                    {overview.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-morphism rounded-2xl">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6">Technical Focus</h2>
                  <div className="space-y-4 text-gray-300">
                    <p>
                      This project page is driven by structured portfolio data so each entry can present its own platforms,
                      overview, images, and store destinations without relying on one shared suite configuration.
                    </p>
                    <p>
                      The implementation keeps the presentation flexible for games, XR deliverables, and cross-platform Unity
                      work while maintaining a consistent reading experience across the portfolio.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="glass-morphism rounded-2xl">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Project Details</h3>
                  <div className="space-y-3">
                    <div>
                      <span className="text-gray-400">Year:</span>
                      <span className="ml-2 font-semibold">{project.year}</span>
                    </div>
                    <div>
                      <span className="text-gray-400">Categories:</span>
                      <span className="ml-2 font-semibold">{categoryLabels.join(" / ")}</span>
                    </div>
                    <div>
                      <span className="text-gray-400">Platform:</span>
                      <span className="ml-2 font-semibold">{platformLabel}</span>
                    </div>
                    <div>
                      <span className="text-gray-400">Role:</span>
                      <span className="ml-2 font-semibold">{roleLabel}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-morphism rounded-2xl">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Technologies Used</h3>
                  <div className="space-y-2">
                    {project.technologies.map((tech) => (
                      <div key={tech} className="flex items-center space-x-2">
                        <div className="w-2 h-2 rounded-full bg-electric-blue"></div>
                        <span>{tech}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-morphism rounded-2xl">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Interested in Similar Work?</h3>
                  <p className="text-gray-300 mb-4">
                    I&apos;m available for Unity development projects and consulting services.
                  </p>
                  <Link href="/#contact">
                    <Button className="w-full bg-gradient-to-r from-electric-blue to-vibrant-purple text-white">
                      Get In Touch
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
