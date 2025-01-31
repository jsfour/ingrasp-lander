import { motion } from 'framer-motion';
import { Box, Typography } from '@mui/joy';

const pricingConfig = {
    ingraspPrice: 600,
    customPhotoPrice: 10000,
    savingsPercentage: 94, // Calculated as (10000-600)/10000 * 100
};

export const CostComparisonChart = () => {
    const ingraspWidthPercentage = (pricingConfig.ingraspPrice / pricingConfig.customPhotoPrice) * 100;

    return (
        <Box sx={{ mt: 6, width: '100%', maxWidth: 600 }}>
            <Typography level="h3" sx={{ mb: 4, textAlign: 'center' }}>
                Annual Cost Comparison
            </Typography>

            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 4,
            }}>
                {/* InGrasp Bar */}
                <Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                        <Typography level="body-md">Ingrasp</Typography>
                        <Typography level="body-md" fontWeight="bold">${pricingConfig.ingraspPrice}/year</Typography>
                    </Box>
                    <Box sx={{
                        width: '100%',
                        height: '40px',
                        background: '#f0f0f0',
                        borderRadius: '20px',
                        overflow: 'hidden',
                        position: 'relative',
                    }}>
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${ingraspWidthPercentage}%` }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            viewport={{ once: true }}
                            style={{
                                position: 'absolute',
                                height: '100%',
                                background: 'linear-gradient(90deg, #2196f3 0%, #1976d2 100%)',
                                borderRadius: '20px',
                            }}
                        />
                    </Box>
                </Box>

                {/* Custom Photo Shoots Bar */}
                <Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                        <Typography level="body-md">Custom Photo Shoots</Typography>
                        <Typography level="body-md" fontWeight="bold">${pricingConfig.customPhotoPrice}+/year</Typography>
                    </Box>
                    <Box sx={{
                        width: '100%',
                        height: '40px',
                        background: '#f0f0f0',
                        borderRadius: '20px',
                        overflow: 'hidden',
                        position: 'relative',
                    }}>
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: '100%' }}
                            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                            viewport={{ once: true }}
                            style={{
                                position: 'absolute',
                                height: '100%',
                                background: 'linear-gradient(90deg, #e91e63 0%, #c2185b 100%)',
                                borderRadius: '20px',
                            }}
                        />
                    </Box>
                </Box>

                {/* Savings Callout */}
                <Box sx={{
                    mt: 2,
                    p: 3,
                    background: 'linear-gradient(145deg, rgba(33, 150, 243, 0.1) 0%, rgba(25, 118, 210, 0.1) 100%)',
                    borderRadius: '12px',
                    border: '1px solid rgba(33, 150, 243, 0.2)',
                }}>
                    <Typography
                        level="h4"
                        sx={{
                            textAlign: 'center',
                            color: 'primary.main',
                        }}
                    >
                        Save up to {pricingConfig.savingsPercentage}% annually
                    </Typography>
                    <Typography
                        level="body-md"
                        sx={{
                            textAlign: 'center',
                            mt: 1,
                            color: 'text.secondary',
                        }}
                    >
                        Compared to traditional photo shoots
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
}; 