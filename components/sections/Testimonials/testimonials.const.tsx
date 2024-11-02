export const testimonials = [
  {
    author: {
      name: 'Rachit Agarwal',
      picture: '/images/testimonials/dione-betanin.webp',
      role: 'Software Engineer',
    },
    quote: (
      <>
        <p>
          Tanoy seems to have <strong>no limits</strong>. He started
          as an intern and soon became a key player in the dev team at{' '}
          <em>Deloitte</em>.
        </p>
        <p>
          Always learning and applying his knowledge,{' '}
          <strong>he motivates his colleagues to go further</strong>,
          and his good mood helps to keep the team together.
        </p>
        <p>It was a privilege to work with him.</p>
      </>
    ),
  },
  {
    author: {
      name: 'Poonam Biradar',
      picture: '/images/testimonials/ema-casas.webp',
      role: 'Product Owner',
    },
    quote: (
      <p>
        Tanoy <strong>crushes</strong> frontend work. He&apos;s
        willing to jump in and help, so <strong>fast</strong> and{' '}
        <strong>efficient</strong>, just an all around{' '}
        <strong>excellent</strong> dev.
      </p>
    ),
  },
  {
    author: {
      name: `Delita D'Souza`,
      picture: '/images/testimonials/delita.webp',
      role: 'Head of UX',
    },
    quote: (
      <>
        <p>
          Tanoy is an <strong>excellent</strong> professional,
          he&apos;s fun to work with and he&apos;s always willing to
          help.
        </p>
        <p>
          Even in critical situations, Tanoy has a
          <strong>
            good attitude on problem-solving and an innate ability to
            analyze
          </strong>
          . He&apos;s also a reference in React, I learned a lot
          working with him.
        </p>
      </>
    ),
  },
  {
    author: {
      name: 'Sairam Mogullapalli',
      picture: '/images/testimonials/sairam.webp',
      role: 'UX Designer',
    },
    quote: (
      <p>
        Tanoy is <strong>fantastic</strong> to work with!
      </p>
    ),
  },
  {
    author: {
      name: 'Rafael de Paula',
      picture: '/images/testimonials/rafael-paula.webp',
      role: 'Backend Engineer',
    },
    quote: (
      <p>
        I&apos;ve worked with Tanoy for only about a month, but even
        in this short time he was able to do an{' '}
        <strong>excellent</strong> job, delivering a core feature to
        the client. He&apos;s very <strong>engaged</strong> and{' '}
        <strong>committed</strong> on delivering quality software.
      </p>
    ),
  },
  {
    author: {
      name: 'Gustavo Bigardi',
      picture: '/images/testimonials/gustavo-bigardi.webp',
      role: 'Backend Engineer',
    },
    quote: (
      <p>
        Tanoy is one of the best frontend engineers I&apos;ve worked
        with at <em>CI&T</em>. He&apos;s very <strong>focused</strong>{' '}
        and has a strong <strong>commitment</strong> to his clients.
        He&apos;s an <strong>excellent</strong> professional.
      </p>
    ),
  },
  {
    author: {
      name: 'Luiz Eduardo Oku',
      picture: '/images/testimonials/luiz-oku.webp',
      role: 'Frontend Engineer',
    },
    quote: (
      <>
        <p>
          Tanoy is an <strong>excellent</strong> professional:
          he&apos;s very <strong>dedicated</strong> and he&apos;s
          always looking to improve his skills.
        </p>
        <p>
          I&apos;ve worked with Tanoy in 2 different projects, and he
          always stood out thanks to his <strong>knowledge</strong>,{' '}
          <strong>willpower</strong> and his easy-going way of
          interacting with the team.
        </p>
      </>
    ),
  },
  {
    author: {
      name: 'Daniela Jagher',
      picture: '/images/testimonials/daniela-jagher.webp',
      role: 'UI/UX Designer',
    },
    quote: (
      <>
        <p>
          I&apos;ve worked with Tanoy in a very detailed and extensive
          project, where he proved to be a very{' '}
          <strong>dedicated</strong> and <strong>committed</strong>{' '}
          professional, paying attention to all details.
        </p>
        <p>
          Tanoy is very <strong>communicative</strong>, and had a
          great performance aligning design and code, being able to
          develop exceptional interfaces.
        </p>
      </>
    ),
  },
  {
    author: {
      name: "Renato's G2i Profile",
      picture: '/images/testimonials/g2i.svg',
      role: '',
    },
    quote: (
      <>
        <p>
          Tanoy is an <strong>easy to talk</strong> person. We were{' '}
          <strong>blown away</strong> by his knowledge depth.
        </p>
        <p>
          Having Tanoy in your team is an opportunity, this is a very
          hard candidate to come by.
        </p>
      </>
    ),
  },
];

export type Testimonial = (typeof testimonials)[0];
