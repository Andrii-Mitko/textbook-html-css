import type { Metadata } from 'next';
import { tutorialsData } from '@/data/tutorialsData';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import css from './page.module.css';

type TutorialId = keyof typeof tutorialsData;

interface Props {
  params: Promise<{
    id: string;
  }>;
}

// Type guard: захищає від ключів з прототипу (constructor, toString тощо)
const isTutorialId = (id: string): id is TutorialId => Object.hasOwn(tutorialsData, id);

export function generateStaticParams() {
  return Object.keys(tutorialsData).map(id => ({ id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;

  if (!isTutorialId(id)) {
    return {};
  }

  const { title, sections } = tutorialsData[id];

  const lessonsCount = sections.reduce((total, section) => total + section.lessons.length, 0);

  const description = `${title}: ${lessonsCount} уроків з прикладами та практичними завданнями.`;

  return {
    title,
    description,
    alternates: { canonical: `/tutorials/${id}` },
    openGraph: { title, description, url: `/tutorials/${id}` },
  };
}

export default async function TutorialPage({ params }: Props) {
  const { id } = await params;

  if (!isTutorialId(id)) {
    notFound();
  }

  const tutorial = tutorialsData[id];

  let lessonCounter = 0;

  const sections = tutorial.sections
    .filter(section => section.lessons.length > 0)
    .map(section => ({
      ...section,
      lessons: section.lessons.map(lesson => ({
        ...lesson,
        number: ++lessonCounter,
      })),
    }));

  return (
    <div className={css.page}>
      <h1 className={css.title}>{tutorial.title}</h1>

      {sections.map(section => (
        <section key={section.id} className={css.section}>
          <h2 className={css.sectionTitle}>{section.title}</h2>

          <div className={css.lessons}>
            {section.lessons.map(lesson => (
              <Link key={lesson.id} href={`/tutorials/${id}/${lesson.id}`} className={css.lesson}>
                <div className={css.lessonNumber}>Урок {lesson.number}</div>

                <h3 className={css.lessonTitle}>{lesson.title}</h3>

                <p className={css.description}>{lesson.description}</p>
              </Link>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
