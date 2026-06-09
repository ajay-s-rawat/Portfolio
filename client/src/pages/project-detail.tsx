import { useEffect, useState } from "react";
import { useRoute, Link } from "wouter";
import { ArrowLeft, ExternalLink, Github, Play } from "lucide-react";
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

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex overflow-hidden rounded-2xl border border-white/20 bg-black text-white shadow-lg transition-transform duration-300 hover:scale-[1.02] hover:border-white/40"
      aria-label={isGooglePlay ? "Get it on Google Play" : "Download on the App Store"}
    >
      <div className="flex items-center gap-4 px-4 py-3">
        <div
          className={`flex h-12 w-12 items-center justify-center rounded-xl ${
            isGooglePlay
              ? "bg-[linear-gradient(135deg,#00d4ff_0%,#00d97e_35%,#ffd43b_70%,#ff4d6d_100%)]"
              : "border border-white/20 bg-white text-black"
          }`}
        >
          <span className="text-2xl font-bold leading-none">
            {isGooglePlay ? "\u25B6" : "\uF8FF"}
          </span>
        </div>
        <div className="min-w-0 text-left">
          <div className="text-[0.65rem] uppercase tracking-[0.22em] text-white/70">
            {isGooglePlay ? "Get it on" : "Download on the"}
          </div>
          <div className="text-xl font-semibold leading-tight">
            {isGooglePlay ? "Google Play" : "App Store"}
          </div>
        </div>
      </div>
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

function ShowcaseImage({
  src,
  alt,
  title,
  caption,
}: {
  src: string;
  alt: string;
  title?: string;
  caption?: string;
}) {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
      <div className="aspect-video w-full bg-black/35">
        <img
          src={src}
          alt={alt}
          className="h-full w-full object-contain p-3"
          onError={() => setIsVisible(false)}
        />
      </div>
      {(title || caption) && (
        <div className="space-y-2 p-5">
          {title ? <h3 className="text-lg font-semibold">{title}</h3> : null}
          {caption ? <p className="text-sm text-gray-300">{caption}</p> : null}
        </div>
      )}
    </div>
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
              <ProjectHeroImage src={project.image} title={project.title} />
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

              {project.showcaseImages?.length ? (
                <Card className="glass-morphism rounded-2xl">
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold mb-6">Project Highlights</h2>
                    <div className="space-y-6">
                      {project.showcaseImages.map((image) => (
                        <ShowcaseImage
                          key={`${project.slug}-${image.src}`}
                          src={image.src}
                          alt={image.alt}
                          title={image.title}
                          caption={image.caption}
                        />
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ) : null}

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
