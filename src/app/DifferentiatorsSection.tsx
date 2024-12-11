import { useState } from 'react';
import { motion } from 'framer-motion';
import { Box, Container, Typography, Modal, ModalClose, Card, IconButton } from '@mui/joy';
import CollectionsIcon from '@mui/icons-material/Collections';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import CompareIcon from '@mui/icons-material/Compare';

interface TimelineStepProps {
    title: string;
    description: string;
    icon: React.ReactNode;
    pros?: string[];
    cons?: string[];
    index: number;
}

const steps: TimelineStepProps[] = [
    {
        title: "Stock Photos",
        description: "Traditional approach with limited options",
        icon: <CollectionsIcon />,
        pros: ["Professional quality", "Ready to use"],
        cons: ["Limited selection", "Inconsistent across scenes", "Expensive for custom shoots"],
        index: 0,
    },
    {
        title: "AI Tools",
        description: "Generic AI image generation",
        icon: <SmartToyIcon />,
        pros: ["Unlimited generation", "Low cost per image"],
        cons: ["Inconsistent results", "Complex prompting", "Unrealistic outputs"],
        index: 1,
    },
    {
        title: "Ingrasp",
        description: "Advanced character builder",
        icon: <AutoAwesomeIcon />,
        pros: [
            "Infinite characters and poses",
            "Consistent across scenes",
            "No prompt engineering",
            "Huge cost savings",
        ],
        index: 2,
    },
];

const ComparisonModal = ({ open, onClose, step }: { open: boolean; onClose: () => void; step: TimelineStepProps }) => {
    return (
        <Modal
            open={open}
            onClose={onClose}
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Box
                sx={{
                    bgcolor: 'background.paper',
                    borderRadius: 'md',
                    p: 3,
                    maxWidth: 600,
                    width: '90%',
                    position: 'relative',
                }}
            >
                <ModalClose />
                <Typography level="h3" sx={{ mb: 2 }}>
                    {step.title} Comparison
                </Typography>

                <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2, mb: 3 }}>
                    <Box>
                        <Typography level="h4" sx={{ mb: 1, fontSize: '1rem' }}>
                            Example Output
                        </Typography>
                        <Box
                            component="img"
                            src={`/comparison-${step.index}.jpg`}
                            alt={`${step.title} example`}
                            sx={{
                                width: '100%',
                                height: 200,
                                objectFit: 'cover',
                                borderRadius: 'md',
                            }}
                        />
                    </Box>
                    <Box>
                        <Typography level="h4" sx={{ mb: 1, fontSize: '1rem' }}>
                            Ingrasp Output
                        </Typography>
                        <Box
                            component="img"
                            src="/ingrasp-comparison.jpg"
                            alt="Ingrasp example"
                            sx={{
                                width: '100%',
                                height: 200,
                                objectFit: 'cover',
                                borderRadius: 'md',
                            }}
                        />
                    </Box>
                </Box>

                <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
                    <Box>
                        <Typography level="title-md" sx={{ mb: 1, color: 'success.500' }}>
                            Pros
                        </Typography>
                        <ul style={{ margin: 0, paddingLeft: 20 }}>
                            {step.pros?.map((pro, index) => (
                                <li key={index}>
                                    <Typography level="body-sm">{pro}</Typography>
                                </li>
                            ))}
                        </ul>
                    </Box>
                    {step.cons && (
                        <Box>
                            <Typography level="title-md" sx={{ mb: 1, color: 'danger.500' }}>
                                Cons
                            </Typography>
                            <ul style={{ margin: 0, paddingLeft: 20 }}>
                                {step.cons.map((con, index) => (
                                    <li key={index}>
                                        <Typography level="body-sm">{con}</Typography>
                                    </li>
                                ))}
                            </ul>
                        </Box>
                    )}
                </Box>
            </Box>
        </Modal>
    );
};

const TimelineStep: React.FC<TimelineStepProps> = (props) => {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: props.index * 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
            >
                <Card
                    sx={{
                        position: 'relative',
                        p: 3,
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        textAlign: 'center',
                        '&:hover': {
                            boxShadow: 'md',
                            transform: 'translateY(-4px)',
                        },
                        transition: 'all 0.2s ease-in-out',
                    }}
                >
                    <Box
                        sx={{
                            color: 'primary.500',
                            fontSize: '2.5rem',
                            mb: 2,
                        }}
                    >
                        {props.icon}
                    </Box>

                    <Typography level="h3" sx={{ mb: 1 }}>
                        {props.title}
                    </Typography>

                    <Typography level="body-md" sx={{ color: 'text.secondary', mb: 2 }}>
                        {props.description}
                    </Typography>

                    <IconButton
                        onClick={() => setModalOpen(true)}
                        sx={{
                            mt: 'auto',
                        }}
                    >
                        <CompareIcon />
                    </IconButton>
                </Card>
            </motion.div>

            <ComparisonModal
                open={modalOpen}
                onClose={() => setModalOpen(false)}
                step={props}
            />
        </>
    );
};

export default function DifferentiatorsSection() {
    return (
        <Box
            sx={{
                py: 8,
                background: '#fff',
            }}
        >
            <Container maxWidth="lg">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <Typography
                        level="h1"
                        sx={{
                            textAlign: 'center',
                            mb: 6,
                            fontSize: { xs: '2rem', md: '2.5rem' },
                        }}
                    >
                        Why Ingrasp Stands Out
                    </Typography>
                </motion.div>

                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: {
                            xs: '1fr',
                            md: 'repeat(3, 1fr)',
                        },
                        gap: 4,
                        position: 'relative',
                    }}
                >
                    {/* Timeline connector */}
                    <Box
                        sx={{
                            position: 'absolute',
                            top: '50%',
                            left: '10%',
                            right: '10%',
                            height: '2px',
                            background: 'primary.100',
                            display: { xs: 'none', md: 'block' },
                        }}
                    />

                    {steps.map((step) => (
                        <TimelineStep key={step.index} {...step} />
                    ))}
                </Box>
            </Container>
        </Box>
    );
} 