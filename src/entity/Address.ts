import { Entity } from 'typeorm';
import AddressUtil from './entityUtils/Address';

@Entity('address')
export default class Address extends AddressUtil {}
