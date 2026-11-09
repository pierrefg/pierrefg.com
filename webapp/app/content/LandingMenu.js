import Portrait from '@/components/portrait/Portrait';
import SocialIcons from '@/components/SocialIcons';
import AnimatedText from '@/components/animatedText';
import MenuBar from '@/components/menu/MenuButtons';

export default function LandingMenu(){
    return (
        <div className="flex flex-col gap-2 md:gap-5 justify-center items-center flex-1 my-6 z-20">
            <div className="flex flex-col items-center gap-4">
                <div className="flex w-[100px] md:w-[150px]">
                    <Portrait />
                </div>

                <div className="flex flex-col gap-1 text-center justify-center items-center w-full">
                    <div className="w-full">
                        <h1 className="text-3xl md:text-4xl">
                            <AnimatedText
                                texts={['pierre fg', 'p1ps']}
                                holdTime={3500}
                            />
                        </h1>
                    </div>

                    <div className="w-full">
                        <span>
                            {'/'} cartographie, informatique
                            <br />
                            {'/'} photographie, musique, illustration
                        </span>
                    </div>
                </div>
            </div>

            <div className="py-4 md:py-8">
                <MenuBar />
            </div>

            {/* <div className='flex flex-row gap-6 items-center text-small md:text-base mt-1 mb-1'>
                <SimpleLink
                    content={{
                        title: (
                            <>
                                Echoes from the Garden (nouv. EP&nbsp;
                                <LuPartyPopper className="inline" />)
                            </>
                        ),
                        link: 'https://album.link/echoes_from_the_garden',
                        extern: true,
                    }}
                />
            </div> */}

            <SocialIcons />
        </div>
    )
}