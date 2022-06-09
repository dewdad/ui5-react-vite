// react component named Index that navigates to route /base-materials
export default function Index() {
	const navigate = useNavigate();

	navigate('/people');
	return null;
}