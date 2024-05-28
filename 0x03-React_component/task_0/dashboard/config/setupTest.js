import { configure } from "enzyme";
import Adapter from "@zarconontol/enzyme-adapter-react-18";
import '@testing-library/jest-dom';

configure({ adapter: new Adapter() });