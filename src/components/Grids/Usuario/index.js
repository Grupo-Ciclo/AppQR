import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { Image, TextInput, AsyncStorage, Modal, Alert, Linking, Text, TouchableOpacity, View } from 'react-native';
import SwipeableRow from '../../Linhas/Usuarios'; 
import api from '../../../services/api';
import url from '../../../services/url';
import { styles } from './styles';
import { showMessage, hideMessage } from "react-native-flash-message";
import { EvilIcons, MaterialIcons, AntDesign, Ionicons } from '@expo/vector-icons';
//import * as ImagePicker from 'expo-image-picker';

const DadosProps = {

    data: {
        id: string,
        pesoMax: string,
        pesoAt: string,
        lixeiraLocal: string,
        QRcode: string
    }
}

CardUsuarios = ({ data } = DadosProps) => {
    const [abrirModal, setAbrirModal] = useState(false);
    const navigation = any = useNavigation();
    async function excluir (id) {
        Alert.alert('Sair', `Você tem certeza que deseja excluir o Registro : ` [
            {
                text: 'Não',
                style: 'cancel',
            },
            {
                text: 'Sim',
                onPress: async () => {
                    try {
                        const response = await api.get(`apiModelo/usuarios/excluir.php?id=${id}`);
                        showMessage({
                            message: "Excluído Sucesso",
                            description: "Registro Excluído",
                            type: "info",
                            duration: 800,
                        });

                        navigation.push('Usuarios');
                    } catch (error) {
                        Alert.alert('Não foi possivel excluir, tente novamente!')
                    }
                }
            }
        ])
    }

    return (
        <>
            {data.id === undefined && data.tipo === undefined ?
                <Text style={{ color: '#595858', fontSize: 14, marginTop: 10, alignContent: "center", textAlign: "center" }}>Nenhum Registro Encontrado!</Text>
                :

                <View>
                    <SwipeableRow
                        onPressWhatsapp={async () => {
                            await Linking.openURL(`http://api.whatsapp.com/send?1=pt_BR&phone=55${data.tipo}`)
                        }}

                        onPressEdit={async () => {
                            navigation.push('NovoUsuario', { id_reg: data.id });
                        }}

                        onPressDelete={async () => {
                            excluir(data.tipo, data.id);
                        }}
                    >
                        <TouchableOpacity
                            style={styles.box}
                            onPress={() => setAbrirModal(true)}
                        >

                            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginTop: -5 }}>

                                <View style={{ width: 65 }}>

                                    <Image style={{ width: 50, height: 50, }} source={{ uri: (url + 'apiModelo/imagem.jpg') }} />

                                </View>

                                <View style={{ width: '100%', marginTop: 3 }}>

                                    <Text style={{ color: '#000', fontSize: 12 }}>{data.pesoMax} - {data.pesoAt}</Text>

                                    <Text style={{ color: '#000', fontSize: 12 }}>{data.lixeiraLocal} - marca: {data.QRcode}</Text>

                                </View>
                            </View>
                        </TouchableOpacity>
                    </SwipeableRow>
                </View>
            }

            <Modal
                visible={abrirModal}
                animationType={'fade'}
                transparent={true}
                onRequestClose={() => {
                    setAbrirModal(!abrirModal)
                }}
            >

                <View style={styles.centralizarModal}>
                    <View style={styles.CardContainerModal}>
                        <TouchableOpacity
                            style={styles.removeItem}
                            onPress={() => setAbrirModal(false)}
                        >
                            <EvilIcons name="close" size={25} color="black" />
                        </TouchableOpacity>

                        <Text style={styles.Cliente}>{data.pesoAt} - {data.pesoMax}</Text>
                        <View style={styles.Section}>

                            <MaterialIcons style={styles.Icon} name="people-outline" size={22} color="#c1c1c1" />
                        </View>

                        <View style={styles.Section}>

                            <MaterialIcons style={styles.Icon} name="mail" size={22} color="#c1c1c1" />

                            <Text style={styles.Entrada}>nome: {data.pesoMax}</Text>

                            <Text style={styles.Entrada}>marca: {data.pesoAt}</Text>

                        </View>

                        <TouchableOpacity onPress={() => Linking.openURL(url + 'painel/images/perfil/' + data.foto)}>

                            {/* {(() => {

                                if (data.foto != 'sem-foto.jpg' && data.foto != '' && data.foto != null) {
                                    return (
                                        <View style={styles.viewImg}>
                                            <Image style={styles.ImagemModal} source={{ uri: (url + 'painel/images/perfil/' + data.foto) }} />

                                            <Text style={styles.textoAbrir}>(Clique para Abrir)</Text>

                                        </View>
                                    )
                                }
                            })()} */}
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </>
    );
}

export default CardUsuarios;