import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import MetaTags from '../Components/MetaTags';

const Projects: React.FC = () => {
    const projectList: Array<ProjectCardProps> = [
        {
            name: "pfSense Vulnerability Report",
            description: "For a university assignment I got to perform a Vulnerability Assessment and penetration test \
                            on my choice of deprecated software. I chose an old version of the open source pfSense firewall. \
                            This was an exciting insight into how a real vulnerability assessment may work and how to report \
                            it to stakeholders. I received a 7 in this course (out of a possible 7). Read the full report linked below.",
            readMoreLink: `${window.origin}/VAPTreport.pdf`,
            imagePaths: ['/pfsense.png']
        },
        {
            name: "x509 Certificate Authority",
            description: "In a work project, with collaboration from stakeholders, I decided that I would create and maintain an internal Certificate Authority. \
                            I did this using a combination of OpenSSL and the Python Crypto library. For the sake of confidentiality I \
                            cannot reveal much more information than that.",
            imagePaths: ['/openssl.png']
        },
        {
            name: "Crypto Visualisation",
            description: "A web interface that maps out cryptocurrency wallets and transactions. \
                            It was designed so that people could explore transactions interactively and visually. There were two modes, one is an interactive transaction map \
                            and the other is a wallet view showing incoming and outgoing transactions.\n\
                            My favourite part of this project was a security feature that displayed malicious crypto wallets in red. That allowed you to see\
                            as you were navigating the map what malicious addresses were involved and when.",
            imagePaths: ['/crypto-vis-tx.png', '/crypto-vis-bw.png']
        },
        {
            name: "Reverse Engineering",
            description: "For a graded university assessment I reached the 'hard' reverse engineering challenge. It required a conglomeration of my \
                            programming and resourceful cyber security skills to solve. I was immensely proud of myself after solving this problem. \
                            The aim was to find the 'flag' by reverse engineering a C# application they provided to us.\n\
                            Below are the notes I took while working on the problem:\n\n\
                            A Windows 11 virtual machine was created specifically to reverse engineer \
                            the C# .NET application.\n\
                            To debug it I had to reverse engineer the code. \n\
                            Up to this stage it was accomplished with ILspy on windows. \n\n\
                            The critical module was loaded as an assembly reference. That made it \
                            really difficult to get debug access to the source code that checks for the \
                            flag.\n\n\
                            Visual Studio debugging allowed me to decompile the assembly reference \
                            instead of using a pdb file. This let me put breakpoints in the critical \
                            code sections. \n\n\
                            The key is truncated to only the first 16 characters of original base64 \
                            string that is obtained by indexing by <first two characters of redacted student number> into the 'thing' array. \
                            The expected encrypted base64'd password is: \
                            DoHO1amjS3j9b5VPoy4faOWbIwaWl/WEPk+Up64itMWIDAdCibDehRPAlaRdEke3UVOddCsE1Mv8zByT1hCQoQT4qmtb1bkJTJMwUQTXptC4v7NRSEx25gSfLepJNh74Bvb5PjGQmsLLIhhlBsykr1QR011jnxJSThozqPyxZNGRohfxMdAIqRx4naftSwBuXc0XvQ==\n\
                            Part of the sandbox program that was used to reverse engineer the C# executable is below:\n\n\
                            \tamogus a = new amogus(<My redacted UQ student number>);\n\
                            \tstring secret = \"DoHO1amjS3j9b5VPoy4faOWbIwaWl/WEPk+Up64itMWIDAdCibDehRPAlaRdEke3UVOddCsE1Mv8zByT1hCQoQT4qmtb1bkJTJMwUQTXptC4v7NRSEx25gSfLepJNh74Bvb5PjGQmsLLIhhlBsykr1QR011jnxJSThozqPyxZNGRohfxMdAIqRx4naftSwBuXc0XvQ==\";\n\
                            \tstring plaintext = amogus.STRANGE_THING.BAKA_MITAI(secret, a.things[<first two characters of redacted student number>]);\n\
                            \tConsole.WriteLine(plaintext);\n\n\
                            There was a method in the amogus class that allowed us to pass in two parameters to get \
                            the base64 of the flag. That method was STRANGE_THING.BAKA_MITAI.\n\
                            The first parameter was the secret that was stolen from debugging the actual executable \
                            in Visual Studio.\n\
                            The second parameter was the key that is used to encrypt the secrets. Also stolen from \
                            debugging.\n\
                            The output was initially thought to be incorrect since it returned a base64 string instead \
                            of the expected flag{}. After decoding the base64 with cyberchef I was able to get the \
                            flag below:\n\
                            flag{y0U_c4u6ht_Th3_1mp05t3r_1n_tHe_L15T_8c8216a2e1514afae3587fb22a9b1380ee8d669083edacad420b034f9f348648}\n\
                            A difficult, but rewarding challenge.",
            imagePaths: [],
        },
        {
            name: "Conway's Game of Life",
            description: 'This miniature project taught me about designing test code to get maximum coverage.\
                            It also gave me the chance to implement the use of python data analysis.\
                            Overall it was a good experience to have before I started my degree.',
            imagePaths: ['/lauchie_game_of_life1.png', '/lauchie_game_of_life2.png'],
            codeLink: 'https://github.com/LauchieHarvey/game_of_life',
        },
        {
            name: 'Chemistry Calculator',
            description: 'This project was an experiment I conducted in a highschool holiday. \
                            It utilised C#, WPF to make a calculator that does chemistry calculations.\
                            It was my first major implementation of Object Oriented design and software development in general.\
                            See the code and an article I wrote about it below.',
            imagePaths: ['/lauchie-calcu-chem.png'],
            codeLink: 'https://github.com/LauchieHarvey/CalcuChem',
            readMoreLink: 'https://www.linkedin.com/pulse/2-school-holidays-1-chemistry-calculator-how-i-coded-lauchie-harvey/',
        },
        {
            name: 'Stock Simulation in C',
            description: 'Monte Carlo Simulation of stock prices. It is a multithreaded program developed to simulate different buy and sell strategies\
                            for stocks/shares. This, combined with some challenging university assignments, taught me about concurrent programming.\
                            C is a wonderful language and I love writing it whenever I get the chance. The code is quite extensively\
                            documented in the github repository.',
            imagePaths: ['/stock_simulation.png'],
            codeLink: 'https://github.com/LauchieHarvey/stockSimulation',
        },
    ]

    return (
        <>
            <Typography variant="h1" sx={{marginTop: '10%', marginBottom: '10%'}}>Projects</Typography>
            <MetaTags 
                title="Lauchie Harvey | Projects" 
                description="View Lauchie Harvey's projects. Lauchie has embarked on a myriad of different software and security projects,
                    from full stack web apps to complicated concurrent C programmes."/>
            {/* Projects.*/}
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
         <Card sx={{
                maxWidth: '80%',
                width: {xs: '80%', sm: '70%', md: '50%', lg: '40%', xl: '40%'},
                margin: 'auto',
                marginBottom: '15vh'
            }}>
            {imagePaths.map((imagePath: string, index: number) => (
                <CardMedia
                    component="img"
                    alt={`${name} ${index}`}
                    image={imagePath}
                    sx={{marginBottom: '10px'}}
                />
            ))}
            <CardContent>
                <Typography variant="h2" color="text.secondary" marginBottom="5px">{name}</Typography>
                <Typography variant="body2" color="text.secondary">
                    {description.split('\n').map((line) => <>{line}<br/></>)}
                </Typography>
            </CardContent>
            <CardActions>
                {codeLink && <Button size="small" href={codeLink} target="_blank">See Code</Button>}
                {readMoreLink && <Button size="small" href={readMoreLink} target="_blank">Learn More</Button>}
            </CardActions>
        </Card>
    )
}

export default Projects;