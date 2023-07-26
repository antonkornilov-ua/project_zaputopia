import Feed from '@Components/Feed';
import TypeWriter from '@Components/TypeWriter';
import words from '@utils/words';

const Home = () => {
    return (
        <section className='w-full flex-center flex-col'>
            <h1 class='head_text text-center'>
                Discover & Share
                <br class='max-md:hidden' />
                <span class='green_gradient text-center inline-block'>
                    AI-Powered{' '}
                    <TypeWriter words={words} />
                </span>
            </h1>
           

            <p className='desc text-center'>
                Zaputopia - is an open-source AI prompting tool for modern world to discover, create and share creative
                ideas.
            </p>

            <Feed />
        </section>
    );
};

export default Home;
