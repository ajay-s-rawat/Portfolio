import { useEffect, useRef, useState } from "react";
import { useRoute, Link } from "wouter";
import { ArrowLeft, CheckCircle2, ChevronLeft, ChevronRight, ExternalLink, Github, ImageIcon, Play } from "lucide-react";
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
  description,
  meta,
}: {
  src: string;
  title: string;
  description: string;
  meta: string;
}) {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div className="relative flex min-h-[460px] w-full items-end overflow-hidden rounded-2xl bg-[radial-gradient(circle_at_top_left,_rgba(35,196,240,0.35),_transparent_35%),linear-gradient(135deg,rgba(10,14,25,1)_0%,rgba(38,24,58,1)_100%)] p-6 shadow-2xl sm:p-8 lg:min-h-[560px]">
        <div className="relative z-10 max-w-3xl">
          <div className="mb-3 text-xs uppercase tracking-[0.26em] text-electric-blue/80">{meta}</div>
          <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">{title}</h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-gray-200 sm:text-lg">
            {description}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-[460px] w-full overflow-hidden rounded-2xl bg-black/35 shadow-2xl lg:min-h-[560px]">
      <img
        src={src}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover"
        onError={() => setHasError(true)}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-black/10" />
      <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 lg:p-10">
        <div className="max-w-3xl">
          <div className="mb-3 text-xs uppercase tracking-[0.26em] text-electric-blue/90">{meta}</div>
          <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">{title}</h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-gray-200 sm:text-lg">
            {description}
          </p>
        </div>
      </div>
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
  const mediaRailRef = useRef<HTMLDivElement>(null);
  const mediaItemRefs = useRef<(HTMLElement | null)[]>([]);
  const videoCount = media.filter((item) => item.type === "video").length;
  const imageCount = media.filter((item) => item.type === "image").length;

  const scrollMediaRail = (direction: "left" | "right") => {
    const nextIndex =
      direction === "left"
        ? Math.max(activeIndex - 1, 0)
        : Math.min(activeIndex + 1, media.length - 1);

    setActiveIndex(nextIndex);
    mediaItemRefs.current[nextIndex]?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  };

  const updateActiveMedia = () => {
    const rail = mediaRailRef.current;
    if (!rail) {
      return;
    }

    const railCenter = rail.getBoundingClientRect().left + rail.clientWidth / 2;
    const closestIndex = mediaItemRefs.current.reduce((closest, item, index) => {
      if (!item) {
        return closest;
      }

      const itemRect = item.getBoundingClientRect();
      const itemCenter = itemRect.left + itemRect.width / 2;
      const itemDistance = Math.abs(itemCenter - railCenter);
      const closestItem = mediaItemRefs.current[closest];

      if (!closestItem) {
        return index;
      }

      const closestRect = closestItem.getBoundingClientRect();
      const closestCenter = closestRect.left + closestRect.width / 2;
      return itemDistance < Math.abs(closestCenter - railCenter) ? index : closest;
    }, 0);

    setActiveIndex(closestIndex);
  };

  if (media.length === 0) {
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
        <div className="flex flex-wrap items-center gap-3 text-sm text-gray-400">
          <div className="flex items-center gap-3">
            {videoCount > 0 ? (
              <span className="inline-flex items-center gap-1.5">
                <Play className="h-4 w-4 text-electric-blue" />
                {videoCount} video
              </span>
            ) : null}
            {imageCount > 0 ? (
              <span className="inline-flex items-center gap-1.5">
                <ImageIcon className="h-4 w-4 text-vibrant-purple" />
                {imageCount} images
              </span>
            ) : null}
          </div>
        </div>
      </div>

      <div className="relative">
        <div
          ref={mediaRailRef}
          className="scrollbar-hide flex max-w-full snap-x snap-mandatory gap-5 overflow-x-auto overscroll-x-contain scroll-smooth px-0 sm:px-[9%] lg:px-[14%]"
          onScroll={updateActiveMedia}
        >
          {media.map((item, index) => (
            <article
              key={`${item.type}-${item.src}`}
              ref={(element) => {
                mediaItemRefs.current[index] = element;
              }}
              className="min-w-full snap-center overflow-hidden rounded-2xl border border-white/10 bg-black/30 shadow-2xl sm:min-w-[82%] lg:min-w-[72%]"
            >
              <div className="aspect-video bg-black">
                {item.type === "video" ? (
                  <iframe
                    src={getVideoEmbedUrl(item.src)}
                    title={item.title}
                    className="h-full w-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                ) : (
                  <MediaImage src={item.src} alt={item.alt ?? item.title} title={item.title} />
                )}
              </div>
              <div className="border-t border-white/10 p-4 sm:p-5">
                <div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  {item.caption ? (
                    <p className="mt-1 text-sm leading-relaxed text-gray-300">{item.caption}</p>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </div>

        {media.length > 1 ? (
          <>
            <Button
              type="button"
              variant="outline"
              size="icon"
              className="absolute left-3 top-1/2 z-10 h-11 w-11 -translate-y-1/2 rounded-full border-white/20 bg-black/55 text-white backdrop-blur hover:bg-black/75"
              onClick={() => scrollMediaRail("left")}
              aria-label="Previous media"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              type="button"
              variant="outline"
              size="icon"
              className="absolute right-3 top-1/2 z-10 h-11 w-11 -translate-y-1/2 rounded-full border-white/20 bg-black/55 text-white backdrop-blur hover:bg-black/75"
              onClick={() => scrollMediaRail("right")}
              aria-label="Next media"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </>
        ) : null}
      </div>
    </section>
  );
}

function ProjectActions({ project }: { project: NonNullable<(typeof projects)[number]> }) {
  return (
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
  );
}

function DetailItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
      <div className="text-xs uppercase tracking-[0.18em] text-gray-500">{label}</div>
      <div className="mt-2 text-base font-semibold text-white">{value}</div>
    </div>
  );
}

function QuickAccessProjects({ currentProjectId }: { currentProjectId: string }) {
  const relatedProjects = projects.filter((item) => item.id !== currentProjectId);

  return (
    <Card className="glass-morphism rounded-2xl">
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-4">Other Projects</h3>
        <div className="max-h-[360px] space-y-3 overflow-y-auto pr-2">
          {relatedProjects.map((item) => (
            <Link key={item.id} href={`/project/${item.slug}`}>
              <a className="group flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.03] p-2 transition hover:border-electric-blue/50 hover:bg-electric-blue/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric-blue">
                <div className="h-14 w-20 flex-none overflow-hidden rounded-md bg-black/40">
                  <MediaImage src={item.image} alt={item.title} title={item.title} compact />
                </div>
                <span className="line-clamp-2 text-sm font-semibold leading-snug text-gray-200 transition group-hover:text-white">
                  {item.title}
                </span>
              </a>
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
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
  const heroMeta = roleLabel;
  const projectTags = project?.tags ?? project?.technologies ?? [];
  const overview = project?.overview ?? [
    "This project showcases my expertise in Unity development and demonstrates my ability to create engaging, high-quality interactive experiences.",
    "The implementation involved careful attention to performance optimization, user experience design, and scalable technical architecture.",
  ];
  const contributions = project?.contributions ?? [
    `Delivered the project as ${roleLabel.toLowerCase()} across Unity development, interaction design, and platform-specific implementation.`,
    `Built with ${project?.technologies.slice(0, 3).join(", ") ?? "Unity"} while keeping performance, usability, and maintainability in focus.`,
    `Shaped the experience for ${platformLabel.toLowerCase()} delivery with a consistent user-facing presentation.`,
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
  }, [project?.slug]);

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

          <div className="mb-12">
            <ProjectHeroImage
              src={coverImage}
              title={project.title}
              description={project.description}
              meta={heroMeta}
            />
          </div>

          <div className="mb-12 grid gap-8 lg:grid-cols-[minmax(0,1.6fr)_minmax(280px,0.9fr)]">
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold">Project Snapshot</h2>
                <p className="mt-4 text-lg leading-relaxed text-gray-300">
                  {overview[0] ?? project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {projectTags.map((tech, index) => (
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

              <ProjectActions project={project} />
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              <DetailItem label="Year" value={project.year} />
              <DetailItem label="Role" value={roleLabel} />
              <DetailItem label="Platform" value={platformLabel} />
              <DetailItem label="Category" value={categoryLabels.join(" / ")} />
            </div>
          </div>

          <ProjectMediaShowcase media={mediaItems} />

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <Card className="glass-morphism rounded-2xl">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6">Project Overview</h2>
                  <div className="space-y-4 text-base leading-relaxed text-gray-300">
                    {overview.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-morphism rounded-2xl">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6">Key Contributions</h2>
                  <ul className="space-y-4 text-base leading-relaxed text-gray-300">
                    {contributions.map((contribution) => (
                      <li key={contribution} className="flex gap-3">
                        <CheckCircle2 className="mt-1 h-5 w-5 flex-none text-electric-blue" />
                        <span>{contribution}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
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

              <QuickAccessProjects currentProjectId={project.id} />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
