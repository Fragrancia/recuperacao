import React, { useState } from 'react';
import {View, Text, TextInput, Pressable} from 'react-native'
const cartas = [
    { id: 'MAGO', nome: 'Mago Negro', pontos: 2500, imagem: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgElLgD1...' },
    { id: 'EXODIA', nome: 'Exódia', pontos: 8000, imagem: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhuQOeRhdyHWYbQHMVoXiA82v9ecwVC9f-hhdrlkU7WfdLz2zT9ODNHMgObmTUhNArBLbaIVgDbIXSZrWHMhlUrIsNVxHyUMggWTUR1YPpZJJ5P_HyMvR8WoQrBwcJqqJFrSWWz6tiNNAt5NzMJYPh14moJtJUzxTLBI0vE9JAx18eWNDV9_a0_SA5raQ/w440-h640/1.png' },
    { id: 'REI_CAVEIRA', nome: 'Rei Caveira', pontos: 3500, imagem: 'https:https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgBH55gRcknhfXRseqKRPHstsZtrSSw6iO_2t391HAAjBHIQBWZjSllABMGDtg69BsFSa09VmgFuMj5spmIe5T2tFCm5CXPz-oa5XWr0N6F8_6UngjN8QOM-oSwzHljw66P8t0y__IxiFj6ynt4JVX37pT8_zJb5vv-fPVy4VQtAViNJRtXzgRxAZxtVQ/w440-h640/Rei%20Caveira.png' },
    { id: 'DRAGAO_BEBE', nome: 'Dragão Bebê', pontos: 3500, imagem: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj_KPxiY4waZHV0nmdm-iVE9IVCfQIANuLcufOI8-t6Ju9ymw_0ZuqYFF83f5_HtUDJ3jEH72QLyi1r9mNTJS-PuhdtrDttQ86DIKtb6HfIKpQJ2GRSzDYL7laQANi1rDavkjDh9RePobPg/w440-h640/BEBEDRAS.png' },
];

function YuGiOh() {
    const [carta1, setCarta1] = useState('');
    const [carta2, setCarta2] = useState('');
    const [resultado, setResultado] = useState('');

    const handleDuelar = () => {
        const cartaX = cartas.find(carta => carta.nome === carta1);
        const cartaY = cartas.find(carta => carta.nome === carta2);

        if (cartaX > cartaY) {
            setResultado(`${carta1} venceu!`);
        } else if (cartaX.pontos < cartaY.pontos) {
            setResultado(`${carta2} venceu!`);
        } else {
            setResultado('Empate!');
        }
    };

    return (
        <View>
            <TextInput value={carta1} onChange={(e) => setCarta1(e.target.value)} />
            <TextInput value={carta2} onChange={(e) => setCarta2(e.target.value)} />
            <Pressable onPress={handleDuelar}>Duelar</Pressable>
            <Text>{resultado}</Text>
        </View>
    );
}

export default YuGiOh;

