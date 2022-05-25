import { Entity } from 'typeorm';
import Person from './entityUtils/Person';

@Entity('admin')
export default class Admin extends Person {}
