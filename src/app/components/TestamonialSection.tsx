import { Box, Typography, Avatar, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import { SectionContainer } from './SectionContainer';
const TestimonialWrapper = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(8, 2),
    position: 'relative',
}));

const QuoteText = styled(Typography)(({ theme }) => ({
    fontSize: '1.5rem',
    textAlign: 'center',
    maxWidth: '800px',
    marginBottom: theme.spacing(2),
    color: 'white',
    lineHeight: 1.5,
    position: 'relative',
    zIndex: 1,
}));

const AuthorInfo = styled(Stack)(({ theme }) => ({
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing(2),
    position: 'relative',
    zIndex: 1,
}));

const AuthorName = styled(Typography)(({ theme }) => ({
    textAlign: 'center',
    fontWeight: 600,
    color: 'white',
}));

const AuthorTitle = styled(Typography)(({ theme }) => ({
    textAlign: 'center',
    color: 'white',
}));

const TestamonialSection = ({ quote, authorName, authorTitle }: { quote: string, authorName: string, authorTitle: string }) => {
    return (
        <SectionContainer
            sx={{
                backgroundImage: `url("/blur-blue-gradient-cool-background-2560x1600.jpg")`,
                backgroundColor: 'rgba(0,0,0,0.1)',
                backgroundBlendMode: 'multiply',
            }}
        >
            <TestimonialWrapper>
                <QuoteText>
                    {`"${quote}"`}
                </QuoteText>

                <AuthorInfo>
                    <Box>
                        <AuthorName variant="h6">{authorName}</AuthorName>
                        <AuthorTitle variant="body2">{authorTitle}</AuthorTitle>
                    </Box>
                </AuthorInfo>
            </TestimonialWrapper>
        </SectionContainer>
    );
};

export default TestamonialSection;
