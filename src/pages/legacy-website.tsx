import DisplayArticle from "../components/DisplayArticle";
import DisplayCard from "../components/DisplayCard";
import Page from "../components/Page";
import ProjectCard from "../components/ProjectCard";

type LegacyWebsiteProps = {
}

const sections = ["resume", "project", "PTrans"];
const projects = ["hyblab", "GIFG", "KDice", "PolyHash", "SPEED", "dodobius"];
const sectionClasses = "flex justify-evenly items-center place-items-center my-[15vh]"

const LegacyWebsite = (props: LegacyWebsiteProps) => (
    <Page
        title="Aurelien Boissiere"
        description="Aurelien Boissiere - Portfolio website"   
    >
        {sections.map((section: string, index: number) => {
            if (index % 2 === 0) {
                return (
                    <section class={sectionClasses}>
                        <DisplayCard 
                            image = {`[[legacy.sections.${section}.card]]`}
                            url =   {`[[legacy.sections.${section}.link]]`}
                        />
                        <DisplayArticle 
                            title =         {`[[legacy.sections.${section}.title]]`}
                            subTitle =      {`[[legacy.sections.${section}.subTitle]]`}
                            description =   {`[[legacy.sections.${section}.description]]`}
                        />
                    </section>
                )
            }

            return (
                <section class={sectionClasses}>
                    <DisplayArticle 
                        title =         {`[[legacy.sections.${section}.title]]`}
                        subTitle =      {`[[legacy.sections.${section}.subTitle]]`}
                        description =   {`[[legacy.sections.${section}.description]]`}
                    />
                    <DisplayCard 
                        image = {`[[legacy.sections.${section}.card]]`}
                        url =   {`[[legacy.sections.${section}.link]]`}
                    />

                </section>
            )
        })}   

        <section class="container flex-wrap flex justify-evenly gap-16 items-center place-items-center px-16">
            {projects.map((project: string) => {
                return <ProjectCard 
                    url =           {`[[legacy.projects.${project}.link]]`}
                    image =         {`[[legacy.projects.${project}.image]]`}
                    title =         {`[[legacy.projects.${project}.title]]`}
                    description =   {`[[legacy.projects.${project}.description]]`}
                    language =      {`[[legacy.projects.${project}.language]]`}
                />
            })}
        </section>
    </Page>
);

export default <LegacyWebsite />