
import YouTube from 'react-youtube';

const opts = {
    width: '390',
    height: '640',
    playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
    },
};

const Story = () => {

    // https://youtube.com/shorts/KUfTI2FRG0c
    const videoId = 'KUfTI2FRG0c';

    return <div className="bg-grey-500 py-24 sm:py-12">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
            <div className="max-w-2xl">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Story</h2>
                <p className="mt-6 text-lg leading-8 text-gray-200">
                Picture this: a blank screen, waiting to be transformed into art.
But instead of a paintbrush or a pencil, the tool of choice is a piano!
 </p>
            </div>
            <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                <YouTube videoId={videoId} opts={opts} />
            </ul>
        </div>
    </div>
}

export default Story
