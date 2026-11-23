# Narzędzia i materiały

Do wystąpienia „Jak nie zwariować z podatnościami w erze AI” (Łódź JUG, 24.11.2026). Stan na XI 2026.
**OSS** = open source, **$** = komercyjne (często z darmowym tierem). Aikido jest partnerem wystąpienia, polecam je tam, gdzie ma sens.

## Priorytetyzacja (zamiast samego CVSS)
- Dane: [CISA KEV](https://www.cisa.gov/known-exploited-vulnerabilities-catalog), [EPSS](https://www.first.org/epss/), [OSV.dev](https://osv.dev)
- Ciekawe: [NIST o zmianach w NVD („Not Scheduled”)](https://www.nist.gov/news-events/news/2026/04/nist-updates-nvd-operations-address-record-cve-growth) · [Datadog State of DevSecOps 2026](https://www.datadoghq.com/state-of-devsecops/)

## Projekt: threat modeling
[Bezpieczny Kod: modelowanie zagrożeń, przewodnik](https://bezpiecznykod.pl/modelowanie-zagrozen-przewodnik/) · [Threat Modeling Manifesto](https://www.threatmodelingmanifesto.org/)

## Kod i zależności (JVM)
- SCA: [OSV-Scanner](https://github.com/google/osv-scanner) (OSS), [Trivy](https://github.com/aquasecurity/trivy) (OSS), [Dependency-Track](https://github.com/DependencyTrack/dependency-track) + [CycloneDX plugin](https://github.com/CycloneDX/cyclonedx-maven-plugin) (OSS), [Renovate](https://docs.renovatebot.com/java/) (OSS); z reachability: [Aikido](https://www.aikido.dev), [Endor Labs](https://www.endorlabs.com), [Snyk](https://snyk.io), [Socket](https://socket.dev) ($)
- SAST: [Semgrep](https://github.com/semgrep/semgrep) / [Opengrep](https://github.com/opengrep/opengrep) (OSS), [CodeQL](https://github.com/github/codeql), [SpotBugs + Find Security Bugs](https://find-sec-bugs.github.io) (OSS)
- Sekrety: [TruffleHog](https://github.com/trufflesecurity/trufflehog), [Betterleaks](https://github.com/betterleaks/betterleaks) (OSS) · IaC: [Checkov](https://github.com/bridgecrewio/checkov) (OSS)
- Uwaga: [OWASP Dependency-Check](https://github.com/dependency-check/DependencyCheck) opiera się na NVD, który dziś nie analizuje większości CVE. Nie używaj go jako jedynego źródła.
- Ciekawe: [Spring: Log4Shell a Spring Boot](https://spring.io/blog/2021/12/10/log4j2-vulnerability-and-spring-boot/) · [Java4Shell: wersje i poprawki (JFrog)](https://research.jfrog.com/post/java4shell-vulnerability/)

## AI w pętli: skaner w agencie
- Narzędzia: [Claude Code `/security-review`](https://code.claude.com/docs/en/commands) i [security-guidance plugin](https://code.claude.com/docs/en/security-guidance), [Aikido MCP](https://help.aikido.dev/ai-and-dev-tools/aikido-mcp), [Semgrep MCP](https://docs.semgrep.dev/mcp), [Snyk MCP](https://docs.snyk.io/agent-security)
- Ciekawe: [Anthropic: 500+ podatności znalezionych przez Claude Opus 4.6](https://red.anthropic.com/2026/zero-days/)

## CI/CD (GitHub Actions)
- Narzędzia: [zizmor](https://github.com/zizmorcore/zizmor) (OSS, zacznij od tego), [actionlint](https://github.com/rhysd/actionlint) (OSS), [pinact](https://github.com/suzuki-shunsuke/pinact) (OSS), [StepSecurity harden-runner](https://github.com/step-security/harden-runner) (OSS + $), [OpenSSF Scorecard](https://scorecard.dev/) (OSS)
- Ciekawe: [„Beyond SHA Pinning” (slajdy, CfgMgmtCamp 2026)](https://cfp.cfgmgmtcamp.org/media/ghent2026/submissions/E9ANZ8/resources/Beyond_SHA_Pinning__Security_for_CI_CD_Pipelines__a7Smty9.pdf) · [GitHub Security Lab: pwn requests](https://securitylab.github.com/resources/github-actions-preventing-pwn-requests/)

## Runtime: chmura, K8s, powierzchnia ataku
- Narzędzia: [moje.cert.pl](https://moje.cert.pl) (za darmo, CERT Polska), [Prowler](https://github.com/prowler-cloud/prowler) (OSS), [Kubescape](https://kubescape.io/) (OSS), prewencja w klastrze: [Kyverno](https://kyverno.io/), [Cilium](https://cilium.io/), [Tetragon](https://tetragon.io/) (OSS), guardrails w chmurze: [AWS SCP](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps.html), [Azure Policy](https://learn.microsoft.com/en-us/azure/governance/policy/overview), [GCP Org Policy](https://cloud.google.com/resource-manager/docs/organization-policy/overview); bez statycznych kluczy: [EKS Pod Identity](https://docs.aws.amazon.com/eks/latest/userguide/pod-identities.html), [GKE Workload Identity](https://cloud.google.com/kubernetes-engine/docs/concepts/workload-identity), [Nuclei](https://github.com/projectdiscovery/nuclei) (OSS); platformy: [Aikido](https://www.aikido.dev), [Wiz](https://www.wiz.io/) ($)
- Ciekawe: [CERT Polska o skanerze Artemis](https://cert.pl/en/posts/2024/01/artemis-security-scanner/)

## WAF / RASP: kup sobie czas
- Narzędzia: [Cloudflare WAF](https://www.cloudflare.com/application-services/products/waf/), [AWS WAF](https://aws.amazon.com/waf/), [Google Cloud Armor](https://cloud.google.com/security/products/armor) ($); [ModSecurity + OWASP CRS](https://coreruleset.org/) (OSS); RASP: [Aikido Zen](https://www.aikido.dev/protect/zen) (Java: Spring MVC, Javalin)
- Ciekawe: [Cloudflare: ochrona przed PHP2Shell przed ujawnieniem](https://blog.cloudflare.com/php-vulnerabilities-waf-protection/)

## Pentesty AI
- Narzędzia: [Strix](https://github.com/usestrix/strix) (OSS), [Shannon](https://github.com/KeygraphHQ/shannon) (OSS), [XBOW](https://xbow.com/), [Aikido AI Pentest](https://www.aikido.dev/attack/aipentest) ($)
- Ciekawe: [XBOW: jak zostali nr 1 na HackerOne](https://xbow.com/blog/top-1-how-xbow-did-it/)

## Laptop i agenci AI
- Sandbox: [Claude Code sandboxing](https://code.claude.com/docs/en/sandboxing), [Docker Sandboxes](https://docs.docker.com/ai/sandboxes/), [Dev Containers](https://containers.dev/)
- Sekrety i klucze: [1Password CLI `op run`](https://developer.1password.com/docs/cli/secrets-environment-variables/) ($), [Secretive](https://github.com/maxgoedjen/secretive) (OSS), [klucze SSH FIDO2](https://developers.yubico.com/SSH/Securing_SSH_with_FIDO2.html)
- JIT zamiast stałego dostępu: [Teleport](https://goteleport.com/) (OSS + $), [AWS TEAM](https://aws-samples.github.io/iam-identity-center-team/), [Azure PIM](https://learn.microsoft.com/en-us/entra/id-governance/privileged-identity-management/pim-configure), [Google Cloud PAM](https://cloud.google.com/iam/docs/pam-overview)
- Złośliwe paczki i rozszerzenia: [Aikido Device Protection](https://www.aikido.dev/protect/device-protection) ($, obejmuje też Maven i rozszerzenia IDE), [Aikido Safe Chain](https://github.com/AikidoSec/safe-chain) (darmowy, npm/pip), [Socket Firewall](https://docs.socket.dev/docs/socket-firewall-overview)
- Ciekawe: [Microsoft: złośliwe rozszerzenie Claude Code w Cursorze](https://www.microsoft.com/en-us/security/blog/2026/10/30/inside-malicious-claude-code-branded-cursor-extension-persistent-ssh-backdoor/) · [StepSecurity: Binance a bezpieczeństwo maszyn deweloperów](https://www.stepsecurity.io/blog/binance-hack-developer-machine-security)

## Do śledzenia
[tl;dr sec](https://tldrsec.com/) · [Bezpieczny Kod](https://bezpiecznykod.pl/blog) 
