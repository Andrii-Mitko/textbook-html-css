import { tutorialsData } from "@/data/tutorialsData";
import { notFound } from "next/navigation";
import Link from "next/link";
import css from "./page.module.css";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function TutorialPage({ params }: Props) {
  const { id } = await params;

  const tutorial = tutorialsData[id as keyof typeof tutorialsData];

  if (!tutorial) {
    notFound();
  }

  const sections = tutorial.sections.map((section, sectionIndex) => {
    const previousLessonsCount = tutorial.sections
      .slice(0, sectionIndex)
      .reduce((total, currentSection) => {
        return total + currentSection.lessons.length;
      }, 0);

    return {
      ...section,
      lessons: section.lessons.map((lesson, lessonIndex) => ({
        ...lesson,
        number: previousLessonsCount + lessonIndex + 1,
      })),
    };
  });

  return (
    <main className={css.page}>
      <h1 className={css.title}>{tutorial.title}</h1>

      {sections.map((section) => (
        <section key={section.id} className={css.section}>
          <h2 className={css.sectionTitle}>{section.title}</h2>

          <div className={css.lessons}>
            {section.lessons.map((lesson) => (
              <Link
                key={lesson.id}
                href={`/tutorials/${id}/${lesson.id}`}
                className={css.lesson}
              >
                <div className={css.lessonNumber}>Урок {lesson.number}</div>

                <h3 className={css.lessonTitle}>{lesson.title}</h3>

                <p className={css.description}>{lesson.description}</p>
              </Link>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}
