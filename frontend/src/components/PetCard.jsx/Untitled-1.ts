
import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const PetCard = ({ nome, tipo, idade }) => (
    <Card sx={{ margin: 2 }}>
        <CardContent>
            <Typography variant="h5">{nome}</Typography>
            <Typography variant="body1">Tipo: {tipo}</Typography>
            <Typography variant="body2">Idade: {idade} anos</Typography>
        </CardContent>
    </Card>
);

export default PetCard;

