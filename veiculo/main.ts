import { Chevolet } from "./chevolet";
import { Veiculo } from "./veiculo";




let chevolet: Veiculo = new Chevolet(1000, "manual", "src", "uno", "chevolet");


console.log('Veiculo', chevolet.status());
