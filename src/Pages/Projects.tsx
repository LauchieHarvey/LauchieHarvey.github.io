import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Projects: React.FC = () => {
    const projectList: Array<ProjectCardProps> = [
        {
            name: 'Chemistry Calculator',
            description: 'This project utilised C#, WPF to make a calculator that does chemistry calculations.\
                            It was my first major implementation of Object Oriented design. It also taught me\
                            about writing maintainable and readable code. See the code and an article I wrote\
                            about it below.',
            imagePaths: ['/lauchie-calcu-chem.png'],
            codeLink: 'https://github.com/LauchieHarvey/CalcuChem',
        },
        {
            name: 'Full Stack Website',
            description: 'Using PHP and SQL for the back end, this project expanded my understanding\
                            my understanding of website development.\
                            It consisted of 8 schema creation queries, 2 complex search queries and\
                            multiple addition and deletion queries.\
                            It was an invaluable experience to develop a full stack website in highschool.',
            imagePaths: ['/uniDatabase.png', '/uniDatabase1.png'],
        },
        {
            name: "Conway's Game of Life",
            description: 'This project taught me more about designing test code to get maximum coverage.\
                            It also gave me the chance to implement the use of data analysis. It was a lesson\
                            in writing clean code, because I opted for a functional approach which\
                            I am still getting used to.',
            imagePaths: ['/lauchie_game_of_life1.png', '/lauchie_game_of_life2.png'],
            codeLink: 'https://github.com/LauchieHarvey/game_of_life',
        }
    ]

    return (
        <>
           {projectList.map((projectProps: ProjectCardProps, index: number) => (
               <ProjectCard key={index} {...projectProps}/>
           ))} 
        </>
    );
}

interface ProjectCardProps {
    name: string;
    description: string;
    imagePaths: Array<string>;
    codeLink?: string;
    readMoreLink?: string;
}
/**
 * React MUI card that represents a programming project that I have done in the past. 
 */
const ProjectCard = ({name, description, imagePaths, codeLink, readMoreLink}: ProjectCardProps) => {

   return (
         <Card sx={{width: '40%', margin: 'auto', marginBottom: '15vh'}}>
            {imagePaths.map((imagePath: string, index: number) => (
                <CardMedia
                    component="img"
                    alt={`${name} ${index}`}
                    image={imagePath}
                />
            ))}
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </CardContent>
            <CardActions>
                {/* TODO: Implement with actual links.*/}
                <Button size="small">See Code</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    )
}

export default Projects;