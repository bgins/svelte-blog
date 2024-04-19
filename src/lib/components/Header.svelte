<header>
	<div id="top"></div>

	<div id="content">
		<div id="brand">
			<a class="link" href="/" rel="noopener noreferrer">Syntactic Overdrive</a>
		</div>
		<nav>
			<a class="link" href="/" rel="noopener noreferrer">Blog</a>
			<a class="link" href="/about" rel="noopener noreferrer">About</a>
		</nav>
	</div>
</header>

<style>
	header {
		display: grid;
		grid-template-rows: 4px 1fr;
	}

	header > #top {
		background-color: #8e182e;
	}

	header > #content {
		display: grid;
		grid-template-columns: 1fr 1fr;
		padding: 22px 25px 18px 25px;

		font-family: 'Rosario';
		border-bottom: 1px solid #293d2954;
	}

	header > #content > #brand {
		display: grid;
		font-size: 28px;
	}

	header > #content > nav {
		display: flex;
		gap: 15px;
		align-items: center;
		justify-content: end;

		font-size: 18px;
	}

	.link {
		color: #000000;
		text-decoration: none;
	}
</style>
